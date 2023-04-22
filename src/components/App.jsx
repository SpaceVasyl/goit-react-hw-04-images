
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Component } from 'react';
import {Searchbar} from './Searchbar/Searchbar';
import { getPhotos } from '../fetch/getPhotos';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import {Loader} from './Loader/Loader';


export class App extends Component {
  state = {
    inputValue: '',
    photos: [],
    page: 1,
    isModalShown: false,
    modalPhotoURL: '',
    isLoading: false,
    fetchArrayLength: 0
  };

  handleSearch = (inputValue) => {
    this.setState({ inputValue : `${inputValue}` })
  };
componentDidUpdate(_, prevState){
  if (this.state.inputValue !== prevState.inputValue){
    this.smallFunction()
}}
smallFunction = () => {
  this.setState({isLoading: true, page: 1});
  getPhotos(this.state.inputValue, this.state.page)
  .then((response) => response.json())
  .then((data) => {
    this.setState({photos:data.hits, fetchArrayLength: data.hits.length})
    return data;
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(()=>this.setState({ isLoading: false }))
}
handleLoadMore = (evt) => {
  evt.preventDefault();
  this.setState(prevState => ({ page: prevState.page + 1 , isLoading: true}), () => {
    getPhotos(this.state.inputValue, this.state.page)
      .then((response) => response.json())
      .then((data) => {
        this.setState({photos : [...this.state.photos , ...data.hits]})
        this.setState({isLoading: false, fetchArrayLength: data.hits.length})
        return data;
      })
      .catch((error) => {
        console.log(error);
        this.setState({ isLoading: false });
      })
  });
}
imageModal = (item) => {
this.setState({isModalShown:true, modalPhotoURL: item});
}
closeModal = () => {
  this.setState({ isModalShown: false });
};
componentDidMount() {
  document.addEventListener("keydown", this.handleKeyDown);
}

componentWillUnmount() {
  document.removeEventListener("keydown", this.handleKeyDown);
}

handleKeyDown = (evt) => {
  if (evt.key === "Escape") {
    this.setState({ isModalShown: false });
  }
};
  render() {console.log(this.state.fetchArrayLength);
    return (
      <div>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery image={this.state.photos} imageModal={this.imageModal} />
        {this.state.isLoading && <Loader/> }
        {this.state.photos.length > 0 && this.state.fetchArrayLength === 12  && <Button handleLoadMore={this.handleLoadMore} state={this.state.page} />}
        {this.state.isModalShown === true ? <Modal modalPhotoURL={this.state.modalPhotoURL} onClose={this.closeModal}/> : null}
      </div>
    );
  }
}
import { useState, useEffect } from "react";
import { ImageGallery } from './ImageGallery/ImageGallery';
import {Searchbar} from './Searchbar/Searchbar';
import { getPhotos } from '../fetch/getPhotos';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import {Loader} from './Loader/Loader';
export const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [isModalShown, setIsModalShown] = useState(false);
  const [modalPhotoURL, setModalPhotoURL] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [fetchArrayLength, setFetchArrayLength] = useState(0);

  const handleSearch = (inputValue) => {
    setInputValue(inputValue);
    loadImages();
  };

useEffect(() => {
  document.addEventListener("keydown", handleKeyDown)
},[])
const loadImages = () => {
  console.log(inputValue);
  if (inputValue === '' && page === 1) {
    return;
  }
  setIsLoading(true)
  getPhotos(inputValue, page)
  .then((response) => response.json())
  .then((data) => {
    setFetchArrayLength(data.hits.length)
    setPhotos(prevState=>[...prevState, ...data.hits])
    return data;
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(()=> setIsLoading(false))
  }


  const handleLoadMore = () => {
    setPage(page + 1)
    const nextPage = page + 1;
    setIsLoading(true);
    
    getPhotos(inputValue, nextPage)
      .then((response) => response.json())
      .then((data) => {
        setFetchArrayLength(data.hits.length);
        setPhotos((prevState) => [...prevState, ...data.hits]);
        return data;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

const imageModal = (item) => {
  setIsModalShown(true);
  setModalPhotoURL(item);
}
const closeModal = () => {
  setIsModalShown(false)
}
const handleKeyDown = (evt) => {
  if (evt.key === "Escape") {
    setIsModalShown(false)
  }
}

  return (
    <div>
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery image={photos} imageModal={imageModal} />
      {isLoading && <Loader/> }
      {photos.length > 0 && fetchArrayLength === 12  && <Button func={handleLoadMore} />}
      {isModalShown === true ? <Modal modalPhotoURL={modalPhotoURL} onClose={closeModal}/> : null}
    </div>
  );
}

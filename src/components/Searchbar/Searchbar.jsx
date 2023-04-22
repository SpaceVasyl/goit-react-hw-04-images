import React ,{ useState } from 'react';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

export const  Searchbar = (props) => {
const [inputValue, setInputValue] = useState('');
const  handleChange = evt => {
  setInputValue(evt.target.value);
};
const  handleSubmit = evt => {
  evt.preventDefault();
  props.onSubmit(inputValue);
  reset();
};

const  reset = () => {
  setInputValue('');
};
  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchFormbutton}>
          <span className="button-label"></span>
        </button>
        <input
          className={css.SearchForminput}
          type="text"
          autoComplete="off"
          value={inputValue}
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
}


// export default class Searchbar extends Component {
//   state = {
//     inputValue: '',
//   };

//   handleChange = evt => {
//     this.setState({ inputValue: evt.target.value });
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();
//     const { inputValue } = this.state;
//     this.reset();
//     this.props.onSubmit(inputValue);
//   };

//   reset = () => {
//     this.setState({ inputValue: '' });
//   };

//   render() {
//     return (
//       <header className={css.Searchbar}>
//         <form className={css.SearchForm} onSubmit={this.handleSubmit}>
//           <button type="submit" className={css.SearchFormbutton}>
//             <span className="button-label"></span>
//           </button>
//           <input
//             className={css.SearchForminput}
//             type="text"
//             autoComplete="off"
//             value={this.state.inputValue}
//             autoFocus
//             placeholder="Search images and photos"
//             onChange={this.handleChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
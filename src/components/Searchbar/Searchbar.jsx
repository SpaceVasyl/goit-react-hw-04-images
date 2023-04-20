import React, { Component } from 'react';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';
export default class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleChange = evt => {
    this.setState({ inputValue: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { inputValue } = this.state;
    this.reset();
    this.props.onSubmit(inputValue);
  };

  reset = () => {
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormbutton}>
            <span className="button-label"></span>
          </button>
          <input
            className={css.SearchForminput}
            type="text"
            autoComplete="off"
            value={this.state.inputValue}
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
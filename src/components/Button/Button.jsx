// import React, {Component} from 'react';
import React from 'react';
import css from './Button.module.css';
import PropTypes from "prop-types";
export const Button = (props) => {
    const { func } = props;
    const handleLoadMore = (evt) => {
        evt.preventDefault();
        func()
      };

return (<button onClick={handleLoadMore} className={css.Button}>
    Load more
</button>)   
}

Button.propTypes = {
    func: PropTypes.func.isRequired,
  };
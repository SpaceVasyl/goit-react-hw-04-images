import React, {Component} from 'react';
import css from './Button.module.css';
import PropTypes from "prop-types";
export class Button extends Component  {
handleLoadMore = evt => {
evt.preventDefault();
this.setState(this.state.imagesDisplayed + 12)
console.log(this.state);
}

    render(){return (<button onClick={this.props.handleLoadMore} className={css.Button}>
        Load more
    </button>)}
}
Button.propTypes = {
    handleLoadMore: PropTypes.func.isRequired,
    state: PropTypes.number.isRequired,
  };
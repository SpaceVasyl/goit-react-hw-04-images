import React from 'react';
import css from './Modal.module.css'
import PropTypes from 'prop-types';
export const Modal = ({modalPhotoURL ,onClose}) => {
    
    return (
        <div className={css.overlay} onClick={onClose}>
        <div className={css.modal} >
          <img src={modalPhotoURL } alt="large" style={css}/>
        </div>
      </div>)}
      Modal.propTypes = {
        modalPhotoURL: PropTypes.string.isRequired,
        onClose: PropTypes.func.isRequired
      };
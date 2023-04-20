import React from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from "prop-types";
const ImageGalleryItem = ({item, imageModal}) => {
  const handleImageClick = (e) => {
    imageModal(e.target.alt);
  };

  return (
    <li className={css.ImageGalleryItem} id={item.id} onClick={handleImageClick}>
      <img src={item.webformatURL} alt={item.largeImageURL} className={css.ImageGalleryItemImage}/>
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  imageModal: PropTypes.func.isRequired,
};
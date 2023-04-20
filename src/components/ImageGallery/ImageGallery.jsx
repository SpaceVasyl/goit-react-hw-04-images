import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css'
import PropTypes from "prop-types";
import { nanoid } from 'nanoid';

export const ImageGallery = ({image , imageModal}) =>  {
    return ( 
      <><ul className={css.ImageGallery}>
        {image.map((item, index) => <ImageGalleryItem item={item} key={nanoid()} imageModal={imageModal} />)}  
      </ul>
      </>
    );
}

ImageGallery.propTypes = {
  image: PropTypes.array.isRequired,
  imageModal: PropTypes.func.isRequired,
};
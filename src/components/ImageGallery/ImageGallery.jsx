import React, { Component } from 'react';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export class ImageGallery extends Component{




  render() {
   
    const { children } = this.props;
    const { gallery } = this.props;
    
        

    return (
      <>
        <div className={css.ImageArea}>
          <h2 className={css.ImageAreaHeading}>Images</h2>
          {gallery.length !== 0 ? (
            <ul className={css.gallery} id="gallery">
              {children}
            </ul>
          ) : (
            <div className={css.message}>
              <p className={css.messageItem}>No Pictures</p>
            </div>
          )}
        </div>
      </>
    );
    }
}

ImageGallery.propTypes = {
  children: PropTypes.node.isRequired,
  gallery: PropTypes.array.isRequired,
};
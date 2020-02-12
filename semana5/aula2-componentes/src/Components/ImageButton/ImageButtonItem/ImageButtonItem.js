import React from 'react';
import './ImageButtonItem.css';
import PropTypes from 'prop-types'

function ImageButtonItem(props) {
  return (
    <div className="ImageButtonItem">
        
        <img id="imagezz"src={ props.image } />

        <p>{ props.description }</p>


    </div>
  );
}

ImageButtonItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string
}

export default ImageButtonItem;

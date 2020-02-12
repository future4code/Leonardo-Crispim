import React from 'react';
import './ImageButton.css';

function ImageButton(props) {
  return (
    <div className="ImageButton">
        { props.children }
    </div>
  );
}

export default ImageButton;

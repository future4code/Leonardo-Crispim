import React from 'react';
import './BigCardItem.css';
import PropTypes from 'prop-types'

function BigCardItem(props) {
  return (
    <div className="BigCardItem">
        
        <img id="imagezz"src={ props.image } />

        <div id="divbox">

        <h3>{ props.title }</h3>

        <p>{ props.description }</p>

        </div>

    </div>
  );
}

BigCardItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string
}

export default BigCardItem;

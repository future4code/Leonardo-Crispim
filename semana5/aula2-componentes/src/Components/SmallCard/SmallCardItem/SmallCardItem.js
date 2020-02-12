import React from 'react';
import './SmallCardItem.css';
import PropTypes from 'prop-types'

function SmallCardItem(props) {
  return (
    <div className="SmallCardItem">

      <img id="imagezz" src={ props.image } />

        <h3>{ props.title }</h3>

        <p>{ props.description }</p>

    </div>
  );
}

SmallCardItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string
}

export default SmallCardItem;

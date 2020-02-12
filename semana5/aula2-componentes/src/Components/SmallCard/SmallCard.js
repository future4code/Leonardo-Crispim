import React from 'react';
import './SmallCard.css';

function SmallCard(props) {
  return (
    <div className="SmallCard">
        { props.children }
    </div>
  );
}

export default SmallCard;

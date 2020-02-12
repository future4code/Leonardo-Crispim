import React from 'react';
import './BigCard.css';

function BigCard(props) {
  return (
    <div className="BigCard">
        { props.children }
    </div>
  );
}

export default BigCard;

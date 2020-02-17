import React from 'react';
import './PostPic.css';
import PropTypes from 'prop-types'

function PostPic(props) {
  return (
    <div className="PostPic">
        
        <img id="postpicture"src={ props.pic } />

    </div>
  );
}

PostPic.propTypes = {
    pic: PropTypes.string
}

export default PostPic;

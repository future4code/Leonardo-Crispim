import React from 'react';
import './PostTitle.css';
import PropTypes from 'prop-types'

function PostTitle(props) {
  return (
    <div className="PostTitle">

        <img id="userthumbnailid"src={ props.userthumbnail } />
        
        <h3><hr />{ props.title }</h3>

    </div>
  );
}

PostTitle.propTypes = {
    title: PropTypes.string.isRequired,
    userthumbnail: PropTypes.string
}

export default PostTitle;

import React from 'react';
import './Post.css';


function Post(props) {
  return (
    <div className="PostDiv">
      { props.children }
    </div>
  );
}

export default Post;

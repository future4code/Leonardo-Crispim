import React from 'react';
import './PageSection.css';


function PageSection(props) {
  return (
    <div className="PageSectionDiv">
      { props.children }
    </div>
  );
}

export default PageSection;

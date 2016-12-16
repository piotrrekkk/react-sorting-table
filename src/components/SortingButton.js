import React, {PropTypes} from 'react';
require('styles/App.css');

export const SortingButton = (props) => (
  <h4 className='sorting' onClick={props.onButtonClick}>
    {props.children}
    {props.isActive === "true" ?
      <span className='small glyphicon glyphicon-sort-by-attributes'> </span> : '' }
  </h4>
);

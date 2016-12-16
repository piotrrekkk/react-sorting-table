import React, {PropTypes} from 'react';
require('styles/App.css');

export const Element = (props) => (
  <tr>
    <td>{props.index + 1}</td>
    <td>
      <img src={props.item.img} className="avatar"/>
      {props.item.username}
    </td>
    <td>{props.item.recent}</td>
    <td>{props.item.alltime}</td>
  </tr>
);

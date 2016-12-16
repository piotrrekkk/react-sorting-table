import React, {PropTypes} from 'react';

import {Element} from './Element';

class Elements extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <tbody>
      {this.props.items.map((item, index) => {
        return <Element key={index} index={index} item={item}/>
      })}
      </tbody>
    );
  }
}

export default Elements;

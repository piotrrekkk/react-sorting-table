import React from 'react';

import {SortingButton} from './SortingButton';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.sortByRecent = this.sortByRecent.bind(this);
    this.sortByAll = this.sortByAll.bind(this);

    this.state = {
      sorting: 'recent'
    };
  }

  sortByAll() {
    this.setState({
      sorting: 'all'
    });
    this.props.sortByAll();
  }

  sortByRecent() {
    this.setState({
      sorting: 'recent'
    });
    this.props.sortByRecent();
  }

  render() {
    return (
      <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>
          <SortingButton isActive={this.state.sorting === "recent" ? "true" : "false"}
                         onButtonClick={this.sortByRecent}>
            Points in last 30 days
          </SortingButton>
        </th>
        <th>
          <SortingButton isActive={this.state.sorting === "all" ? "true" : "false"}
                         onButtonClick={this.sortByAll}>
            All time
          </SortingButton>
        </th>
      </tr>
      </thead>
    );
  }
}

export default Header;

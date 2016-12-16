import React, {PropTypes} from 'react';

import Header from './Header';
import Elements from './Elements';
import fetch from 'isomorphic-fetch';


class LeaderboardTable extends React.Component {

  RECENT_URL = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
  ALL_TIME_URL = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    this.getResponse(this.RECENT_URL);
  }

  getResponse(url) {
    fetch(url)
      .then(response => {
        if( response.status >= 400 ) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(items => {
        this.setState({
          items: items
        })
      })
  }

  sortByAll() {
    this.getResponse(this.ALL_TIME_URL);
  }

  sortByRecent() {
    this.getResponse(this.RECENT_URL);
  }

  render() {
    return (
      <table className="table table-striped table-hover">
        <Header
          sortByAll={this.sortByAll.bind(this)}
          sortByRecent={this.sortByRecent.bind(this)}
        />
        <Elements items={this.state.items}/>
      </table>
    );
  }
}

export default LeaderboardTable;

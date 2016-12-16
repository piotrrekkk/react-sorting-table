require('bootstrap/dist/css/bootstrap.css');
require('styles/App.css');

import React from 'react';

import LeaderboardTable from './LeaderboardTable';
class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>Leaderboard Table</h1>
        <LeaderboardTable/>
      </div>
    );
  }
}

App.defaultProps = {};

export default App;

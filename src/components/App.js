import React, { Component } from 'react';
import './App.css';
import AppBar from '../containers/AppBar';
import Profile from '../containers/Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        { this.props.loggedIn && <Profile /> }
      </div>
    );
  }
}

export default App;

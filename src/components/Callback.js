import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Loading from './Loading';

class App extends Component {
  constructor(props) {
    super(props);

    if (props.isSignInPending) {
      props.handlePendingSignIn()
    }
  }
  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/" />
    } else if (this.props.isSignInPending) {
      return (
        <Loading message={'Loading user...'}/>
      );
    } else {
      return <Redirect to="/" />
    }
  }
}

export default App;

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

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
        <div>
          Loading user...
        </div>
      );
    } else {
      return <Redirect to="/" />
    }
  }
}

export default App;

import React, { Component } from 'react';

class AppBar extends Component {
  renderLogin() {
    return <input type="button" onClick={() => this.props.logIn()} value="Sign In With Blockstack" />
  }
  renderLogout() {
    return (
      <input type="button" onClick={() => this.props.logOut()} value="Log Out" />
    );
  }
  render() {
    const {
      loggedIn,
    } = this.props
    return (
      <div>
        {loggedIn ? this.renderLogout() : this.renderLogin()}
      </div>
    );
  }
}

export default AppBar;

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from '../reducers/startup';
import App from '../containers/App.js'
import Callback from '../containers/Callback';

class AppRoutes extends Component {
  componentDidMount() {
    this.props.startup();
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/callback" component={Callback} />
      </Switch>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    startup: () => dispatch(actions.startup())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(AppRoutes));

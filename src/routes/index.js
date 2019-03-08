import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from '../reducers/startup';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '../containers/AppBar.js'
import App from '../containers/App.js'
import Callback from '../containers/Callback';

const styles = {
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
};

class AppRoutes extends Component {
  componentDidMount() {
    this.props.startup();
  }
  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/callback" component={Callback} />
        </Switch>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    startup: () => dispatch(actions.startup())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(withStyles(styles)(AppRoutes)));

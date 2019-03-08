import { connect } from 'react-redux';
import Callback from '../components/Callback';
import { actions } from '../reducers/user';
import * as blockstack from 'blockstack';

const mapDispatchToProps = dispatch => ({
  handlePendingSignIn: () => dispatch(actions.handlePendingSignIn()),
});

const mapStateToProps = state => ({
  isSignInPending: blockstack.isSignInPending(),
  loggedIn: state.user.loggedIn
});

export default connect(mapStateToProps, mapDispatchToProps)(Callback);

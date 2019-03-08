import { connect } from 'react-redux';
import AppBar from '../components/AppBar';
import { actions } from '../reducers/user';

const mapDispatchToProps = dispatch => ({
  logIn: () => dispatch(actions.logIn()),
  logOut: () => dispatch(actions.logOut()),
});

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  profile: state.user.profile,
});

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);

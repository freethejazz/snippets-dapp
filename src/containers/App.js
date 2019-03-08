import { connect } from 'react-redux';
import App from '../components/App';
import { actions } from '../reducers/user';

const mapDispatchToProps = dispatch => ({
  logIn: () => dispatch(actions.logIn()),
});

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

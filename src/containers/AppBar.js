import { connect } from 'react-redux';
import AppBar from '../components/AppBar';
import { actions } from '../reducers/user';
import { actions as snippetActions } from '../reducers/snippet';

const mapDispatchToProps = dispatch => ({
  logIn: () => dispatch(actions.logIn()),
  logOut: () => dispatch(actions.logOut()),
  saveSnippet: () => dispatch(snippetActions.saveSnippet()),
});

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  profile: state.user.profile,
  edited: state.snippet.edited,
  loading: state.snippet.retrieving,
  saving: state.snippet.saving,
});

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);

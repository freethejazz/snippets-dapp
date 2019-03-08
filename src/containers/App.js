import { connect } from 'react-redux';
import App from '../components/App';
import { actions } from '../reducers/snippet';

const mapDispatchToProps = dispatch => ({
  setHtml: (html) => dispatch(actions.setHtml(html)),
  setCss: (css) => dispatch(actions.setCss(css)),
  setJs: (js) => dispatch(actions.setJs(js)),
});

const mapStateToProps = state => ({
  html: state.snippet.html,
  css: state.snippet.css,
  js: state.snippet.js,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

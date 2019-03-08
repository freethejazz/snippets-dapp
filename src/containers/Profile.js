import { connect } from 'react-redux';
import Profile from '../components/Profile';

const mapStateToProps = state => ({
  profile: state.user.profile,
});

export default connect(mapStateToProps)(Profile);

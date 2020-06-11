import { connect } from 'react-redux';
import SoftwaresPage from './SoftwaresPage';

const mapStateToProps = state => ({
  softwares: state.shortcuts.softwares,
  loading: state.shortcuts.loading
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SoftwaresPage);
import { connect } from 'react-redux';
import SoftwaresPage from './SoftwarePage';

const mapStateToProps = state => ({
  softwares: state.shortcuts.softwares
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SoftwaresPage);
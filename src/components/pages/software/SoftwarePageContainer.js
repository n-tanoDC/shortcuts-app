import { connect } from 'react-redux';
import SoftwaresPage from './SoftwarePage';

const mapStateToProps = state => ({
  software: state.software.software
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SoftwaresPage);
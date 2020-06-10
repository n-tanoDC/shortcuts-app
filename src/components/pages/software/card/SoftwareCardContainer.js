import { connect } from 'react-redux';
import SoftwareCard from './SoftwareCard';

const mapStateToProps = (state, ownProps) => ({
  shortcuts: state.shortcuts.shortcuts.filter(shortcut => shortcut.software.id === parseInt(ownProps.software.id))  
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SoftwareCard);
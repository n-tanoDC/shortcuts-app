import { connect } from 'react-redux';
import ShortcutDetails from './ShortcutDetails';

const mapStateToProps = state => ({
  shortcuts: state.shortcuts.shortcuts
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShortcutDetails);
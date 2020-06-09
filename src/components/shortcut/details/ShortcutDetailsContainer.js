import { connect } from 'react-redux';
import ShortcutDetails from './ShortcutDetails';

const mapStateToProps = (state, ownProps) => ({
  shortcut: state.shortcuts.shortcuts.find(shortcut => shortcut.id === parseInt(ownProps.match.params.id))
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShortcutDetails);
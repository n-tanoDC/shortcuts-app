import { connect } from 'react-redux';
import AddShortcutPage from './AddShortcutPage';
import { addShortcut, fetchShortcuts } from '../../../actions/actions'

const mapStateToProps = state => ({
  softwares: state.shortcuts.softwares,
  categories: state.shortcuts.categories,
  loading: state.shortcuts.loading
});

const mapDispatchToProps = dispatch => ({
  addShortcut: shortcut => dispatch(addShortcut(shortcut)),
  fetchShortcuts: () => dispatch(fetchShortcuts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddShortcutPage);
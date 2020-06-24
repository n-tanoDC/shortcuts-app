import { connect } from 'react-redux';
import AddShortcutForm from './AddShortcutForm';
import { addShortcut } from '../../../../actions/actions';

const mapStateToProps = state => ({
  softwares: state.shortcuts.softwares,
  categories: state.shortcuts.categories,
});

const mapDispatchToProps = dispatch => ({
  addShortcut: shortcut => dispatch(addShortcut(shortcut)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddShortcutForm);
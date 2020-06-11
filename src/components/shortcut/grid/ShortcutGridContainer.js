import {connect} from "react-redux";
import ShortcutGrid from "./ShortcutGrid";

const mapStateToProps = state => ({
  shortcuts: state.shortcuts.shortcuts,
  loading: state.shortcuts.loading.shortcuts
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShortcutGrid);

import {connect} from "react-redux";
import ShortcutCard from "./ShortcutCard";

const mapStateToProps = (state, ownProps) => ({
  // categories: state.shortcuts.categories.filter(category => category.id === parseInt(ownProps.shortcut.category.id))
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShortcutCard);

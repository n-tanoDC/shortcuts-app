import React, {Component} from 'react';
import ShortcutCardContainer from "../card/ShortcutCardContainer";
import Loader from "react-loader-spinner";

class ShortcutGrid extends Component {
  render() {
    const {shortcuts, loading} = this.props;
    const shortcutsJsx = shortcuts
      .map(shortcut => <ShortcutCardContainer key={shortcut.id} shortcut={shortcut}/>)
      .slice(0, 6);

      if (loading) {
        return (
          <Loader
            className="loader"
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
          />)
      }

    return (
      <div className="row row-cols-1 row-cols-md-2">
        {shortcutsJsx}
      </div>
    );
  }
}

export default ShortcutGrid;

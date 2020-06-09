import React, {Component} from 'react';
import ShortcutCardContainer from "../card/ShortcutCardContainer";

class ShortcutGrid extends Component {
  render() {
    const {shortcuts} = this.props;
    const shortcutsJsx = shortcuts
      .map(shortcut => <ShortcutCardContainer key={shortcut.id} shortcut={shortcut}/>)
      .slice(0, 6);

    return (
      <div className="row row-cols-1 row-cols-md-2">
        {shortcutsJsx}
      </div>
    );
  }
}

export default ShortcutGrid;

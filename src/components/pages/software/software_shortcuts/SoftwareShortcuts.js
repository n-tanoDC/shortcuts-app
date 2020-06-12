import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SoftwareShortcuts extends Component {
  render() {
    const {shortcuts, software} = this.props;
    let jsxShortcuts = <p>Aucun raccourci pour {software.name}</p>

    if (shortcuts.length > 0) {
      jsxShortcuts = shortcuts.map(shortcut => <li><Link className="text-decoration-none text-dark" key={shortcut.id} to={"/shortcuts/" + shortcut.id}>{shortcut.title}</Link></li>)
    }    

    return (
      <ul>
        {jsxShortcuts}
      </ul>
    );
  }
}

export default SoftwareShortcuts;
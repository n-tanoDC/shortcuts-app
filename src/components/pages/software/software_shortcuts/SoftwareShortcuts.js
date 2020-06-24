import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SoftwareShortcuts extends Component {
  render() {
    let {shortcuts, software, limit} = this.props;
    let jsxShortcuts = <p>Aucun raccourci pour {software.name}</p>
    
    shortcuts = limit ? shortcuts.slice(0, limit) : shortcuts;

    if (shortcuts.length > 0) {
      jsxShortcuts = shortcuts.map((shortcut, key) => <li key={key}><NavLink activeClassName="font-weight-bolder" className="text-dark" key={shortcut.id} to={"/shortcuts/" + shortcut.id}>{shortcut.title}</NavLink></li>)
    }

    return (
      <ul className="list-unstyled">
        {jsxShortcuts}
      </ul>
    );
  }
}

export default SoftwareShortcuts;
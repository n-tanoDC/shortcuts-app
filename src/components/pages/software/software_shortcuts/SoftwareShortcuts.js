import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SoftwareShortcuts extends Component {
  render() {
    const {shortcuts, software} = this.props;
    let jsxShortcuts = <p>Aucun raccourci pour {software.name}</p>

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
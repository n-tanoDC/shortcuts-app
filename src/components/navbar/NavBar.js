import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
        <h1 className="navbar-brand display-1">Shortcuts</h1>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink exact to='/' className='nav-link' activeClassName='active'>Accueil</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/software' className='nav-link' activeClassName='active'>Logiciels</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/add-shortcut' className='nav-link' activeClassName='active'>Ajouter un raccourci</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;

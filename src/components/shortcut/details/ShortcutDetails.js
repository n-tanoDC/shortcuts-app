import React, { Component } from 'react';

class ShortcutDetails extends Component {
  render() {
    const {shortcut} = this.props;

    if (!shortcut) {
      return <div>Loading</div>
      //TODO : ajouter un Loader
    }

    return (
      <div>
        <img src={process.env.REACT_APP_UPLOADS_URL + '/' + shortcut.software.logo} alt={shortcut.software.name}/>
        <h1>{shortcut.title}</h1>
        <p>{shortcut.context}</p>
        <p>{shortcut.description}</p>
        <ul>
          <li>Windows : {shortcut.windows}</li>
          <li>Mac OS : {shortcut.macos}</li>
          <li>Linux : {shortcut.linux}</li>
        </ul>
        <img src={process.env.REACT_APP_UPLOADS_URL + '/' + shortcut.image} alt={shortcut.title}/>
      </div>
      )
  }
}

export default ShortcutDetails;
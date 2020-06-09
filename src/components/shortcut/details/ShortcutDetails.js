import React, { Component } from 'react';

class ShortcutDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shortcut: {},
      loading: true
    }
  }

  componentDidMount() {
    this.fetchShortcut();
  }
  
  fetchShortcut() {
    const {id} = this.props.match.params;
    fetch(process.env.REACT_APP_API_URL + '/shortcuts/' + id)
      .then(response => response.json())
      .then(data => this.setState({ shortcut: data, loading: false}))
  }


  render() {
    const { loading, shortcut } = this.state;

    if (loading) {
      return <h1>Chargement</h1>
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
    );
  }
}

export default ShortcutDetails;
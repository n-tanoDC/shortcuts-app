import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SoftwareCard extends Component {
  render() {
    const {software, shortcuts} = this.props;
    let jsxShortcuts = <p>Aucun raccourci pour {software.name}</p>
    
    if (shortcuts[0]) {
      jsxShortcuts = shortcuts.map(shortcut => <Link key={shortcut.id} to={"/shortcut/" + shortcut.id}>{shortcut.title}</Link>)
    }
    

    return (
      <div className="col p-4">
        <div className="card flex-row align-items-center">
          <div className="col-2">
            <img src={process.env.REACT_APP_UPLOADS_URL + '/' + software.logo} className="card-img-top" alt={software.name}/>
          </div>
          <div className="card-body">
            <h2 className="card-title">{software.name}</h2>
            <button className="btn btn-primary mb-2" type="button" data-toggle="collapse" data-target={"#collapse" + software.id}>
              Voir les raccourcis
            </button>
            <div className="collapse" id={"collapse" + software.id}>
              <div className="card card-body">
                {jsxShortcuts}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SoftwareCard;
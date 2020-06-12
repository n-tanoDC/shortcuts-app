import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SoftwareCard extends Component {
  render() {
    const {software, shortcuts} = this.props;
    let jsxShortcuts = <p>Aucun raccourci pour {software.name}</p>
    
    if (shortcuts.length > 0) {
      jsxShortcuts = shortcuts.map(shortcut => <Link className="text-decoration-none text-dark" key={shortcut.id} to={"/shortcuts/" + shortcut.id}>{shortcut.title}</Link>)
    }    

    return (
      <div className="col p-4">
        <div className="card flex-row align-items-center bg-light">
          <div className="col-2">
            <img src={process.env.REACT_APP_UPLOADS_URL + '/' + software.logo} className="card-img-top" alt={software.name}/>
          </div>
          <div className="card-body">
            <h3 className="card-title font-weight-lighter">{software.name}</h3>
            <button className="btn btn-primary btn-sm" type="button" data-toggle="collapse" data-target={"#collapse" + software.id}>
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
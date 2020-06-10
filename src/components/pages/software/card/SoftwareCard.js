import React, { Component } from 'react';

class SoftwareCard extends Component {
  render() {
    const {software} = this.props;

    return (
      <div className="col p-4">
        <div className="card flex-row align-items-center">
          <div className="col-2">
            <img src={process.env.REACT_APP_UPLOADS_URL + '/' + software.logo} className="card-img-top" alt={software.name}/>
          </div>
          <div className="card-body">
            <h2 className="card-text">{software.name}</h2>
            <button className="btn btn-primary">Voir les raccourcis</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SoftwareCard;
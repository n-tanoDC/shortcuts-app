import React, { Component } from 'react';

class SoftwareCard extends Component {
  render() {
    const {software} = this.props;

    return (
      <div className="software-card col mb-4 mt-4">
        <div className="card">
          <div className="col-2">
            <img src={process.env.REACT_APP_UPLOADS_URL + '/' + software.logo} className="card-img-top software-card_img" alt={software.name}/>
          </div>
          <div className="card-body col">
            <h2 className="card-title">{software.name}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default SoftwareCard;
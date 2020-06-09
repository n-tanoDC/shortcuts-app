import React, {Component} from 'react';
import './ShortcutCard.scss';

class ShortcutCard extends Component {
  render() {
    const {shortcut} = this.props;

    return (
      <div className="shortcut-card col mb-4 mt-4">
        <div className="card">
          <div className="col-2">
            <img src={process.env.REACT_APP_UPLOADS_URL + '/' +shortcut.software.logo} className="card-img-top shortcut-card_img" alt={shortcut.software.name}/>
          </div>
          <div className="card-body col">
            <h2 className="card-title">{shortcut.title}</h2>
            <p className="card-text">{shortcut.context}</p>
            <a href="#" className="btn btn-primary">Voir plus</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ShortcutCard;

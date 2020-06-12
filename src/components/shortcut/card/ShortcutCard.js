import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/fr'

class ShortcutCard extends Component {
  getCategories(shortcut) {
    let jsxCategories = shortcut.categories.map(category => <span className="badge badge-secondary p-1 mr-2" key={category.id}>{category.name}</span>);
    return jsxCategories;
  } 

  render() {
    const {shortcut} = this.props;
    const categories = this.getCategories(shortcut);
    const date = moment(shortcut.created_at).locale('fr').fromNow();

    return (
      <div className="mw-50 p-4">
        <div className="card bg-light w-100 flex-row align-items-center">
          <div className="col-2">
            <img src={process.env.REACT_APP_UPLOADS_URL + '/' +shortcut.software.logo} className="card-img-top" alt={shortcut.software.name}/>
          </div>
          <div className="card-body">
            <h2 className="card-title font-weight-light">{shortcut.title}</h2>
            <p>{categories}</p>
            <p className="font-weight-lighter font-italic">Ajouté {date}</p>
            <div className="text-center">
              <NavLink className="btn btn-primary btn-sm" to={"/shortcuts/" + shortcut.id}>Voir plus</NavLink>  
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShortcutCard;

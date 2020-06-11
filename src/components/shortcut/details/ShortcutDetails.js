import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

class ShortcutDetails extends Component {
  
  getCategories(shortcut) {
    let jsxCategories = shortcut.categories.map(category => <span className="badge badge-info p-1 mr-2" key={category.id}>{category.name}</span>);
    return jsxCategories;
  } 

  render() {
    const {shortcut, loading} = this.props;

    if (loading) {
      return (
        <Loader
          className="loader"
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
        />)
    }

    const categories = this.getCategories(shortcut);

    const jsxDemo = shortcut.image === '' || shortcut.image === undefined ? 'Aucune démonstration pour ce raccourci.' : <img className="w-100" src={process.env.REACT_APP_UPLOADS_URL + '/' + shortcut.image} alt={shortcut.title}/>

    return (
      <div>
        <div className="d-flex align-items-center bg-dark p-1">
          <img className="h-100 col-1 m-4 d-none d-md-block" src={process.env.REACT_APP_UPLOADS_URL + '/' + shortcut.software.logo} alt={shortcut.software.name}/>
          <div className="p-1">
            <h1 className="display-4 text-light my-2">{shortcut.title}</h1>
            <div className="my-2">
              {categories}
            </div>
          </div>
        </div>
        <table className="table bg-light text-dark p-4">
          <tbody>
            <tr>
              <th scope="row">Logiciel</th>
              <td className="w-100">{shortcut.software.name}</td>
            </tr>
            <tr>
              <th scope="row">Contexte</th>
              <td className="w-100">{shortcut.context}</td>
            </tr>
            <tr>
              <th scope="row">Description</th>
              <td>{shortcut.description}</td>
            </tr>
            <tr>
              <th scope="row">Windows</th>
              <td>{shortcut.windows}</td>
            </tr>
            <tr>
              <th scope="row">Mac OS</th>
              <td>{shortcut.macos}</td>
            </tr>
            <tr>
              <th scope="row">Linux</th>
              <td>{shortcut.linux}</td>
            </tr>
            <tr>
              <th scope="row">Démonstration</th>
              <td>{jsxDemo}</td>
            </tr>
          </tbody>
        </table>
      </div>
      )
  }
}

export default ShortcutDetails;
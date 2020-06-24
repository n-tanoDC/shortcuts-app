import React, { Component } from 'react';
import Select from 'react-select';

class AddShortcutForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      windows: '',
      macos: '',
      linux: '',
      context: '',
      description: '',
      image: '',
      createdAt: new Date(),
      software: '', 
      categories: []
    }
  }

  handleChange(event) {
    let value, propertyName;

    if (Array.isArray(event)) {
      propertyName = "categories";
      value = event.map(e => e.value);
    } else {
      propertyName = event.target.name;
      value = event.target.value;
    }

    this.setState({
      [propertyName]: value
    });
  }

  /*handleChange(event) {
    let value = event.target.value;
    
    if (event.target.name === 'categories') {
      value = [];
      for (const option of event.target.options) {
        if (option.selected) {
          value.push(option.value);
        }
      }
    }

    this.setState({
      [event.target.name]: value
    });
  }*/

  handleSubmit(event) {
    event.preventDefault();
    this.setState({createdAt: new Date()}, this.props.addShortcut(this.state));
  }
  
  render() {
    const {softwares, categories} = this.props;
    const jsxSoftwares = softwares.map(software => <option key={software.id} value={'/api/software/' + software.id}>{software.name}</option>);
    // const jsxCategories = categories.map(category => <option key={category.id} value={'/api/categories/' + category.id}>{category.name}</option>);
    const jsxCategories = categories.map(category => ({ value: '/api/categories/' + category.id, label: category.name}));

    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)} className="col-6 m-auto p-4">
          <h1 className="mb-4 display-4">Ajouter un raccourci</h1>
          <div className="form-group">
            <input required onChange={(event) => this.handleChange(event)} type="text" name="title" className="form-control" placeholder="Titre"/>
          </div>
          <div className="form-group">
            <input required onChange={(event) => this.handleChange(event)} type="text" name="windows" className="form-control" placeholder="Windows"/>
          </div>
          <div className="form-group">
            <input required onChange={(event) => this.handleChange(event)} type="text" name="macos" className="form-control" placeholder="Mac OS"/>
          </div>
          <div className="form-group">
            <input required onChange={(event) => this.handleChange(event)} type="text" name="linux" className="form-control" placeholder="Linux"/>
          </div>
          <div className="form-group">
            <input required onChange={(event) => this.handleChange(event)} type="text" name="context" className="form-control" placeholder="Contexte"/>
          </div>
          <div className="form-group">
            <textarea required onChange={(event) => this.handleChange(event)} className="form-control" name="description" placeholder="Description"/>
          </div>
          <div className="form-group">
            <select required onChange={(event) => this.handleChange(event)} className="form-control" name="software">
              <option disabled> - Choisissez un logiciel</option>
              {jsxSoftwares}
            </select>
          </div>
          <div className="form-group">
            <Select isMulti options={jsxCategories} onChange={(event) => this.handleChange(event)} name="categories"/>
            {/* <select multiple onChange={(event) => this.handleChange(event)} className="form-control" name="categories">
              {jsxCategories}
            </select> */}
          </div>
          <button className="btn btn-primary">Ajouter</button>
        </form>
      </div>
    );
  }
}

export default AddShortcutForm;
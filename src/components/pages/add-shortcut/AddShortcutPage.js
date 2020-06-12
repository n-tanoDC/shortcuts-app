import React, {Component} from 'react';
import Loader from 'react-loader-spinner';
import AddShortcutForm from './form/AddShortcutForm';

class AddShortcutPage extends Component {

  render() {
    const {softwares, categories, loading, addShortcut} = this.props;

    if (loading.categories || loading.softwares || loading.form) {
      return (
        <Loader
          className="loader"
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}/>
      )
    }

    return (
      <AddShortcutForm softwares={softwares} categories={categories} addShortcut={addShortcut}/>
    )
  }

}

export default AddShortcutPage;

import React, {Component} from 'react';
import Loader from 'react-loader-spinner';
import AddShortcutForm from './form/AddShortcutFormContainer';

class AddShortcutPage extends Component {

  render() {
    const {loading} = this.props;

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
      <AddShortcutForm />
    )
  }

}

export default AddShortcutPage;

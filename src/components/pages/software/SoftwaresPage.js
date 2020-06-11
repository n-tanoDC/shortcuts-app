import React, {Component} from 'react';
import SoftwareCard from './card/SoftwareCardContainer';
import Loader from "react-loader-spinner";

class SoftwaresPage extends Component {
  render() {
    const {softwares, loading} = this.props;
    const jsxSoftware = softwares.map(software => <SoftwareCard software={software} key={software.id}/>) 
    
    if (loading.softwares || loading.shortcuts) {
      return (
        <div className="loader">
          <Loader
            className="loader"
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
          />
        </div> )
    }
    
    return (
      <div className="row row-cols-1 row-cols-md-2">
        {jsxSoftware}
      </div>
    );
  }
}

export default SoftwaresPage;

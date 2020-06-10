import React, {Component} from 'react';
import SoftwareCard from './card/SoftwareCardContainer';

class SoftwaresPage extends Component {
  render() {
    const {softwares} = this.props;

    const jsxSoftware = softwares.map(software => <SoftwareCard software={software} key={software.id}/>) 
    return (
      <div className="row row-cols-1 row-cols-md-2">
        {jsxSoftware}
      </div>
    );
  }
}

export default SoftwaresPage;

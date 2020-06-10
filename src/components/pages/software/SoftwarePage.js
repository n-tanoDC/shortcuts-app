import React, {Component} from 'react';
import SoftwareCard from './card/SoftwareCardContainer';

class SoftwaresPage extends Component {
  render() {
    const {software} = this.props;

    const jsxSoftware = software.map(soft => <SoftwareCard software={soft} key={soft.id}/>) 
    return (
      <div className="row row-cols-1 row-cols-md-2">
        {jsxSoftware}
      </div>
    );
  }
}

export default SoftwaresPage;

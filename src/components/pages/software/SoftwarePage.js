import React, {Component} from 'react';
import SoftwareCard from './card/SoftwareCard';

class SoftwaresPage extends Component {
  render() {
    const {software} = this.props;

    const jsxSoftware = software.map(soft => <SoftwareCard software={soft} key={soft.id}/>) 
    return (
      <div>
        {jsxSoftware}
      </div>
    );
  }
}

export default SoftwaresPage;

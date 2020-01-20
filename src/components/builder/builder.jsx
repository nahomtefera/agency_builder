import React, { Component, Fragment } from 'react';
import './builder.css';
//components
import BuilderView from './builderView';
import Controls from '../controls/controls';
import ManageSections from '../manageSections/manageSections'

class Builder extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Fragment>
        <BuilderView />
        <ManageSections />
        <Controls />
      </Fragment>
     );
  }
}
 
export default Builder;
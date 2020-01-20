import React, { Component, Fragment } from 'react';
import './controls.css';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Fragment>
        <div className='controls-container'>
          <div className='controls-option'>Sections</div>
          <div className='controls-option'>Themes</div>
          <div className='controls-option'>Submit</div>
        </div>
      </Fragment>
     );
  }
}
 
export default Controls;
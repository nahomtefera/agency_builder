import React, { Component, Fragment } from 'react';
import './App.css';
import Builder from './components/builder/builder'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Fragment>
        <Builder />
      </Fragment>
     );
  }
}
 
export default App;
import React, { Component, Fragment } from 'react';
import './manageSections.css';

class ManageSections extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      sections: ['hero', 'menu', 'slideshow', 'contact', 'about']
    }

    this.cancel = this.cancel.bind(this);
    this.dragStart = this.dragStart.bind(this)
    this.dropped = this.dropped.bind(this)
  }
  
  dragStart(e) {
    let index = e.target.dataset.position; // get position on dragged item 
    e.dataTransfer.setData("text/plain", index); // add the position to datatransfer
  }
  dropped(e) {
    e.preventDefault()
    let oldIndex = e.dataTransfer.getData("text/plain"); // get position from element being dragged
    let newIndex = e.target.dataset.position; // get position of element being targeted
    // Get sections array and make the swap from old position to new position
    let updatedSections = this.state.sections;
    let temp = updatedSections[oldIndex];
    updatedSections[oldIndex] = updatedSections[newIndex];
    updatedSections[newIndex] = temp;
    // Set new positions
    this.setState({sections: updatedSections})
  }

  cancel(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  render() { 
    return ( 
      <Fragment>
        <div className="tool-container">
          <h1>Rearrange your sections</h1>
          <div className="component-container">
            {
              this.state.sections.map( (section, index) => {
                return (
                  <div data-position={index} className='component-section draggable-component' key={index} draggable='true' 
                    onDragStart={(e)=>{this.dragStart(e)}}
                    onDrop={(e)=>{this.dropped(e)}}
                    onDragOver={(e)=>{this.cancel(e)}}>

                    <div data-position={index} className="drag-icon">
                      <svg data-position={index} width="24" height="24" viewBox="0 0 24 24"><path d="M13,11H18L16.5,9.5L17.92,8.08L21.84,12L17.92,15.92L16.5,14.5L18,13H13V18L14.5,16.5L15.92,17.92L12,21.84L8.08,17.92L9.5,16.5L11,18V13H6L7.5,14.5L6.08,15.92L2.16,12L6.08,8.08L7.5,9.5L6,11H11V6L9.5,7.5L8.08,6.08L12,2.16L15.92,6.08L14.5,7.5L13,6V11Z"></path></svg>
                    </div>
                    <div data-position={index} className="title">{section}</div>
                  </div>
                )
              })
            }
          </div>
          <div className="functions-container">
            <div className="function-button submit">Save</div>
            <div className="function-button reset">Reset</div>
          </div>
        </div>
      </Fragment>
     );
  }
}
 
export default ManageSections;
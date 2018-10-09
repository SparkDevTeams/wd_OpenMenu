import React, { Component } from "react";
import ShoppinglistPV from "./ShoppinglistPV";
import AddItemWindowM from "./AddItemWindowM";

class ShoppinglistPC extends Component {

  constructor() {
    super();
    this.state = {
      addItemWindowVisibility: false
    };
  }

  openAddItemWindow() {
    this.setState({
      addItemWindowVisibility: true
    });
  }
  closeAddItemWindow(){
    this.setState({
      addItemWindowVisibility: false
    });
  }

  render() {
    let componentToReturn;
    if (this.state.addItemWindowVisibility === true) {
       componentToReturn = (
                          <div>
                          <ShoppinglistPV 
                           openWindowFunction={this.openAddItemWindow.bind(this)} />
                          <AddItemWindowM closeWindowFunction={this.closeAddItemWindow.bind(this)}/>
                          </div>
                          );
    }
    else {
      
       componentToReturn = (<ShoppinglistPV 
                           openWindowFunction={this.openAddItemWindow.bind(this)}/>);
      

    }

    return componentToReturn;

    
  }
}

export default ShoppinglistPC;

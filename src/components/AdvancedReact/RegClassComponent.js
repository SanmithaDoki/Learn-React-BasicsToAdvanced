import React, { Component } from "react";

class RegClassComponent extends Component {
  render() {
    console.log("Regular Component Render");
    return <div>Regular Class Component {this.props.name}</div>;
  }
}

export default RegClassComponent;

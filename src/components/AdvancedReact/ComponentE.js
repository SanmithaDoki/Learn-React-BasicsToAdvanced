import React, { Component } from "react";
import ComponentF from "./ComponentF";
import userContext from "./userContext";

export class ComponentE extends Component {
  static contextType = userContext;
  render() {
    return (
      <div>
        This is Component E. It used Context type.. and the value is{" "}
        {this.context}
        <ComponentF />
      </div>
    );
  }
}

// ComponentE.contextType = userContext;

export default ComponentE;

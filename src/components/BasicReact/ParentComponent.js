import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      greetParent: "Parent",
    };
    this.eventHandler = this.eventHandler.bind(this);
  }

  eventHandler(childName) {
    alert(`Hello ${this.state.greetParent} from ${childName}`);
  }

  render() {
    return (
      <div>
        <ChildComponent eventHandler={this.eventHandler} />
      </div>
    );
  }
}

export default ParentComponent;

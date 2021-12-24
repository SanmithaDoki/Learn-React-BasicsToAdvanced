import React, { Component } from "react";
import MemoComponent from "./MemoComponent";
import PureComp from "./PureComp";
import RegClassComponent from "./RegClassComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sanmitha",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Sanmitha",
      });
    }, 2000);
  }

  render() {
    console.log("***********Parent Component Render************");
    return (
      <div>
        <div>Parent Component</div>
        <MemoComponent name={this.state.name} />
        {/* <PureComp name={this.state.name} /> */}
        {/* <RegClassComponent name={this.state.name} /> */}
      </div>
    );
  }
}

export default ParentComponent;

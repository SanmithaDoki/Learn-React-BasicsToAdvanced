import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  // Pure component compares the reference so it renderes only once if the object reference is same..
  //even new value added to the object it checks only reference..
  //while using pure component we need to be more consciouc

  render() {
    console.log("Pure Component Render");
    return <div>Pure Component {this.props.name}</div>;
  }
}

export default PureComp;

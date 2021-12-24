import React, { Component } from "react";
import FrwdRefInput from "./FrwdRefInput";

class FrwrdRefParentInput extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }
  onclickFocusInput = () => {
    this.inputRef.current.focus();
  };
  render() {
    return (
      <div>
        <FrwdRefInput ref={this.inputRef} />
        <button onClick={this.onclickFocusInput}>Focus Input</button>
      </div>
    );
  }
}

export default FrwrdRefParentInput;

import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef(); //using refs in new method - Method1
    this.callBackRef = null; // using refs in old method(callback method) - method2 
    this.setCallBackRef = (element) => {
      this.callBackRef = element;
    };
  }

  componentDidMount() {
    // this.inputRef.current.focus();
    // console.log(this.inputRef);
    if (this.callBackRef) {
      this.callBackRef.focus();
    }
  }

  onClickButton = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCallBackRef} />
        <button onClick={this.onClickButton}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;

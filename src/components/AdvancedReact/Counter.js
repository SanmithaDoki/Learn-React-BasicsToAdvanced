import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  onIncrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    const { count } = this.state;
    // if the function is sent as props.. we need to call as this.props.<propName>()
    // return <div>{this.props.render(count, this.onIncrementCount)}</div>;

    // if the function is sent as children.. we need to call as this.props.children()
    return <div>{this.props.children(count, this.onIncrementCount)}</div>;
  }
}

export default Counter;

import React, { Component } from "react";

class ClickCounterTwo extends Component {
  render() {
    const { count, onIncrementCount } = this.props;
    return <button onClick={onIncrementCount}>Clicked {count} Times</button>;
  }
}

export default ClickCounterTwo;

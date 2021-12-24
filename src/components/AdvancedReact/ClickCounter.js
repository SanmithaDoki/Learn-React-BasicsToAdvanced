import React, { Component } from "react";
import hocWithCounter from "./HOCWithCounter";

class ClickCounter extends Component {
  render() {
    const { count, onIncrementCount } = this.props;
    return <button onClick={onIncrementCount}>Clicked {count} Times</button>;
  }
}

export default hocWithCounter(ClickCounter, 5);

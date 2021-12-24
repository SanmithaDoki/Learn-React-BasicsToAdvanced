import React, { Component } from "react";
import hocWithCounter from "./HOCWithCounter";

class HoverCounter extends Component {
  render() {
    const { count, onIncrementCount } = this.props;
    return <h1 onMouseOver={onIncrementCount}>Hovered {count} Times</h1>;
  }
}

export default hocWithCounter(HoverCounter, 10);

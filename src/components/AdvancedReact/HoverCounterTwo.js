import React, { Component } from "react";

class HoverCounterTwo extends Component {
  render() {
    const { count, onIncrementCount } = this.props;
    return <h2 onMouseOver={onIncrementCount}>Hovered {count} Times</h2>;
  }
}

export default HoverCounterTwo;

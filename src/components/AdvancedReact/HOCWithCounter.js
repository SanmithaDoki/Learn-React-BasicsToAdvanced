import React, { Component } from "react";

const hocWithCounter = (WrappedComponent, incrementNumber) => {
  class HOCWithCounter extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    onIncrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          onIncrementCount={this.onIncrementCount}
          {...this.props}
        />
      );
    }
  }
  return HOCWithCounter;
};

export default hocWithCounter;

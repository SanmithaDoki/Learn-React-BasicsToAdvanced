import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  incrementCount() {
    // this.setState(
    //   {
    //     //setState is asynchronous.. 1st console.log will print and later this will update
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("state changed " + this.state.count);
    //   }
    // );

    // syntax fot this.setState({},()=>{}) or this.setState((prevState,props)=>({}))

    this.setState((prevState, props) => ({ //for multiple calls of same object react takes that call as single call.. 
      count: prevState.count + 1   // so to get the difference we can use prevState to update for multiple calls
    })) 
    console.log(this.state.count);
  }

  incrementCountFive() {
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
  }

  render() {
    return (
      <div>
        <h1>Count {this.state.count}</h1>
        <button onClick={() => this.incrementCountFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;

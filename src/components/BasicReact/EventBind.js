import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    // this.eventHandler = this.eventHandler.bind(this); // Approach 3
  }

  //   eventHandler() {
  //     this.setState({
  //       message: "Good Bye!",
  //     });
  //    console.log(this);
  //   }

  //Approach 4
  eventHandler = () => {
    this.setState({
      message: "Good Bye!",
    });
    console.log(this);
  };
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.eventHandler.bind(this)}>Click</button> //Approach 1 */}
        {/* <button onClick={() => this.eventHandler()}>Click</button> //Approach 2 */}
        {/* <button onClick={this.eventHandler}>Click</button> //Approach 3 - binded this in constructor */}
        <button onClick={this.eventHandler}>Click</button>
        {/*Approach 4 - using arrow function while creating eventHandler = () =>{} */}
      </div>
    );
  }
}

export default EventBind;

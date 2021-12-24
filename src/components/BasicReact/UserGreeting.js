import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    //Short Circuit operator Conditional Rendering
    return this.state.isLoggedIn && <div>Welcome Sanmitha!</div>;

    // Ternary operator Conditional Rendering
    {
      /*return this.state.isLoggedIn ? (
      <div>Welcome Sanmitha!</div>
    ) : (
      <div>Welcome Guest</div>
    ); */
    }

    // Element variables Conditional Rendering
    {
      /*let message;
    if (this.state.isLoggedIn) {
      message = "Welcome Sanmitha!";
    } else {
      message = "Welcome Guest";
    }
    return <div>{message}</div>; */
    }

    // If/else Conditional Rendering
    {
      /*if (this.state.isLoggedIn) {
      return <div>Welcome Sanmitha!</div>;
    } else {
      return <div>Welcome Guest</div>;
    } */
    }
  }
}

export default UserGreeting;

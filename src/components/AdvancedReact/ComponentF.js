import React, { Component } from "react";
import { UserConsumer } from "./userContext";

export class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return (
            <div>
              Hello {username}.. This is printed in Component F. It used Context
              ProviderConsumer Method
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;

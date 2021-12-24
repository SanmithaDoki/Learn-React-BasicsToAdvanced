import React from "react";

function ChildComponent(props) {
  return (
    <div>
      {/* <button onClick={props.eventHandler}>Click Me</button> //if you want to take props from parent */}
      <button onClick={() => props.eventHandler("Sanmitha")}>Click Me</button>{" "}
      {/*If you want to send props from child to parent component use arrow function */}
    </div>
  );
}

export default ChildComponent;

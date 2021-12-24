import React from "react";

// Below is the code using JSX
// const Hello = () =>{
//     return(
//         <div className='dummyClass>
//             <h1>Hello Sanmitha!</h1>
//         </div>
//     )
// }

// Below is the code without using JSX
const Hello = () => {
  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },
    React.createElement("h1", null, "Hello Sanmitha!")
  );
};

export default Hello;

import React from "react";

// function Greet(){
//     return <h1>Hello Sanmitha!</h1>
// }

// we can destructure props in two ways
// const Greet = (name,heroName) =>{}
// const Greet = (props) =>{
//     const {name,heroName} = props;
// }
// we can use the names directly without using props.name

const Greet = (props) => {
  const { name, heroName } = props;
  console.log(props);
  //props.name = "doki" // we cannot change the values of the props.
  return (
    <div>
      <h1>
        Hello {name}!... You are {heroName}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;

import React from "react";

function Person(props) {
  const { person } = props;

  return (
    <div>
      <h1>
        I am {person.name}. I am {person.age} years old.
      </h1>
    </div>
  );
}

export default Person;

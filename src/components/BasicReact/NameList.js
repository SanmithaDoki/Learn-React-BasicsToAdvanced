import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    { id: 1, name: "Sanmitha", age: "24" },
    { id: 2, name: "Sahithi", age: "25" },
    { id: 3, name: "Sindhu", age: "23" },
  ];
  //   const personList = persons.map((person) => <Person person={person} />);
  const names = ["Sanmitha", "Sindhu", "Sahithi", "Sanmitha"];
  //   const nameList = names.map((name) => <h1 key={name}>{name}</h1>); //if we give name as key some times it warns. you may have 2 same names then the key will not be unique
  const nameList = names.map((name, index) => <h1 key={index}>{name}</h1>); // Index works good but when new item is added at top of list it doesnt work well and changes the list pattern and index
  //   const nameList = names.map((name) => <h1>{name}</h1>); // Method 2 of List Rendering

  return <div>{nameList}</div>;

  //   <div>{personList}</div>; // Method 2 of list rendering
  {
    //Method 1 of List Rendering
    /*<div>
      {names.map((name) => (
        <h1>{name}</h1>
      ))}
      </div>*/
  }
}

export default NameList;

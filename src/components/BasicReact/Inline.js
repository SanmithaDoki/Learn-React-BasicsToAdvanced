import React from "react";

function Inline() {
  const inlineStyle = {
    fontSize: "72px",
    color: "blue",
  };
  return (
    <div>
      <h1 className="error">error</h1>
      {/*If we apply css from src folder with only .css extension then it will be applied to entire app.js as it is imported in app.js file */}
      <h1 style={inlineStyle}>Inline Styling Method</h1>
    </div>
  );
}

export default Inline;

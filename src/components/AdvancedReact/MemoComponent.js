import React from "react";

function MemoComponent(props) {
  console.log("Memo Component Render");
  return <div>Memo Component {props.name}</div>;
}

// to avoid rerendering of functional components we use React.memo() method while exporting
export default React.memo(MemoComponent);

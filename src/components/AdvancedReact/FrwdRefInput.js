import React from "react";

// function FrwdRefInput(props) {
//   return (
//     <div>
//       <input type="text" />
//     </div>
//   );
// }

//In this function component arrow function is used to forwardRef
const FrwdRefInput = React.forwardRef((props,ref) => {
    return (
      <div>
        <input type="text" ref={ref} />
      </div>
    );
  };)

export default FrwdRefInput;

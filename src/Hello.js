import React from "react";
function Hello(props) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <h2>Age is {props.age}</h2>
    </div>
  );
}
export default Hello;

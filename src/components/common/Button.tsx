import React from "react";
// check if button is type sucess, primary or danger

function Button(props: { name: string, type: string }) {
  return (
    <button className={`btn btn-active btn-${props.type}`}>{props.name}</button>
  );
}

export default Button;
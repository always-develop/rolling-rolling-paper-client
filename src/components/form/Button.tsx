import React from "react";
import "assets/styles/form/Button.scss";

type ButtonProps = {
  name: string;
};

function Button(props: ButtonProps) {
  return <button>{props.name}</button>;
}

export default Button;

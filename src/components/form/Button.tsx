import React, { MouseEventHandler } from "react";
import "assets/styles/form/Button.scss";

type ButtonProps = {
  name: string;
  onButtonClick: MouseEventHandler<HTMLButtonElement>
};

function Button(props: ButtonProps) {
  return <button className="Button" onClick={props.onButtonClick}>{props.name}</button>;
}

export default Button;

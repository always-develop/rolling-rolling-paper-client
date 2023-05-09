import React from "react";
import "assets/styles/form/Button.scss";

type InputProps = {
  id: string;
  placeholder?: string
};

function Input(props: InputProps) {
  return <input id={props.id} type="text" placeholder={props.placeholder}></input>
}

export default Input;

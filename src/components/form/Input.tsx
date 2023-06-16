import React from 'react';
import 'assets/styles/form/Input.scss';

type InputProps = {
  id: string;
  placeholder?: string;
  labelName?: string;
};

function Input(props: InputProps) {
  return (
    <div className="text-form-group">
      <label htmlFor="{props.id}">{props.labelName}</label>
      <input id={props.id} type="text" placeholder={props.placeholder}></input>
    </div>
  );
}

export default Input;

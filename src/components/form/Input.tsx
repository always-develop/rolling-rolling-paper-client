import React, { LegacyRef, forwardRef } from 'react';
import 'assets/styles/form/Input.scss';

type InputProps = {
  id: string;
  type: string;
  placeholder?: string;
  labelName?: string;
};

const Input = forwardRef(function Input(props: InputProps, ref: LegacyRef<HTMLInputElement>) {
  return (
    <div className="text-form-group">
      <label htmlFor="{props.id}">{props.labelName}</label>
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        ref={ref}
      ></input>
    </div>
  );
})

export default Input;

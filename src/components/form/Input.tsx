import React, { ChangeEventHandler, LegacyRef, forwardRef } from 'react';
import 'assets/styles/form/Input.scss';

type InputProps = {
  id: string;
  type: string;
  placeholder?: string;
  labelName?: string;
  value: string,
  onChange: ChangeEventHandler<HTMLInputElement>
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
        value={props.value}
        onChange={props.onChange}
      ></input>
    </div>
  );
})

export default Input;

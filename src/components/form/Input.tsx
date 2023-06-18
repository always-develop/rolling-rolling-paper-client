import React, { forwardRef, useRef } from 'react';
import 'assets/styles/form/Input.scss';

type InputProps = {
  id: string;
  placeholder?: string;
  labelName?: string;
};

function Input(props: InputProps) {
  const inputRef: React.MutableRefObject<null> = useRef(null);

  return (
    <div className="text-form-group">
      <label htmlFor="{props.id}">{props.labelName}</label>
      <input
        id={props.id}
        type="text"
        ref={inputRef}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
}

// function Input(({ value, onChange }, ref) => {
//   return (
//     <div className="text-form-group">
//       <label htmlFor="{props.id}">{props.labelName}</label>
//       <input
//         id={props.id}
//         type="text"
//         value={value}
//         onChange={onChange}
//         placeholder={props.placeholder}
//       ></input>
//     </div>
//   );
// })

export default Input;

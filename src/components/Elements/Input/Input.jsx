/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import { forwardRef } from "react";

/* eslint-disable no-unreachable */
const Input = forwardRef((props, ref) => {
  const { type, placeholder, name } = props;

  return (
    <input
      type={type}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-58"
      placeholder={placeholder}
      name={name}
      ref={ref}
    ></input>
  );
});

export default Input;

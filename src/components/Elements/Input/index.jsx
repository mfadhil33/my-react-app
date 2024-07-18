/* eslint-disable react/prop-types */
import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const InputForm = forwardRef((props, ref) => {
  const { lable, name, type, placeholder } = props;
  return (
    <div className="mb-6">
      <Label htmlfor={name}>{lable}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        ref={ref}
      ></Input>
    </div>
  );
});

export default InputForm;

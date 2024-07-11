/* eslint-disable react/prop-types */
import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { lable, name, type, placeholder } = props;

  return (
    <div className="mb-6">
      <Label htmlfor={name}>{lable}</Label>
      <Input name={name} type={type} placeholder={placeholder}></Input>
    </div>
  );
};

export default InputForm;

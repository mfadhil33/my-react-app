import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="fullname"
        type="text"
        placeholder="insert your name here"
        name="fullname"
      />
      <InputForm
        label="email"
        type="email"
        placeholder="example@mail.com"
        name="email"
      />

      <InputForm
        label="password"
        type="password"
        placeholder="password"
        name="email"
      />
      <InputForm
        label="confirm password"
        type="password"
        placeholder="confirm password"
        name="confirmpassword"
      />
      <Button variant="bg-blue-600">Register</Button>
    </form>
  );
};

export default FormRegister;

import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/products";
    console.log("Login");
  };
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="email"
        type="email"
        placeholder="example@mai.com"
        name="email"
      />
      <InputForm
        label="password"
        type="password"
        placeholder="password"
        name="password"
      />
      <Button variant="bg-blue-600" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
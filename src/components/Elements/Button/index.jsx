/* eslint-disable react/prop-types */
const Button = (props) => {
  const {
    children,
    variant = "bg-white",
    type = "button",
    onClick = () => {},
  } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

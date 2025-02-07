const Button = ({
  text = "Button text",
  path,
  hoverColor = "hover:bg-green-500",
  maxWidth = "max-w-[50%]",
  minWidth = "min-w-[65%]",
  onClick,
  marginBottom = "mb-0",
  backgroundColor = "bg-black",
  borderColor = "border-none",
  borderWeight = null,
  color = "text-white",
}) => {
  return (
    <button
      to={path}
      className={`flex w-full h-auto justify-center items-center p-5 text-xl  font-workSans font-semibold rounded-md ${hoverColor} ${backgroundColor} ${color} ${maxWidth} ${minWidth} transition-all duration-500 ease-in-out ${marginBottom} ${borderColor} ${borderWeight} shadow-3xl`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

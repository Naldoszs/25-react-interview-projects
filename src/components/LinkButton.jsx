import { Link } from "react-router-dom";

const LinkButton = ({
  text = "Button text",
  path,
  marginTop = "mt-0",
  textColor = "text-main-black-100",
  maxWidth = "",
}) => {
  return (
    <Link
      to={path}
      className={`border-2 border-slate-400 flex w-full h-auto justify-center items-center p-5 text-xl  font-workSans font-semibold rounded-md hover:bg-main-black-30 ${textColor}  transition-all duration-500 ease-in-out ${marginTop} ${maxWidth}`}
    >
      {text}
    </Link>
  );
};

export default LinkButton;

import { FaTimes } from "react-icons/fa";
const CustomModalCard = ({ onClick }) => {
  return (
    <div
      className={`absolute z-50  bg-white border-2 border-green-500 flex justify-center items-center w-[100%] h-screen text-center max-lg:px-6 max-sm:px-3`}
    >
      <div className="relative  flex flex-col gap-12 py-20 px-5 border-[1.5px] border-gray-400 rounded-md w-fit">
        {/* the heading */}
        <h3 className="w-full h-auto font-bold text-xl font-dmSans">
          This is the modal card
        </h3>
        {/* the body */}
        <p className="w-fit h-auto text-wrap">
          This is the body text od the modal pop-up and it is gonna display the
          content of the card as always
        </p>
        {/* the cancel icon from react icons */}
        <div
          className="bg-slate-300 bg-opacity-50 cursor-pointer w-fit flex p-2 rounded-sm absolute top-4 right-4 hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out"
          aria-label="the cancel button"
          onClick={onClick}
        >
          {/* the modal closal */}
          <FaTimes />
        </div>
      </div>
    </div>
  );
};

export default CustomModalCard;

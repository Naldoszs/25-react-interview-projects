import { useState } from "react";
import { FaStar } from "react-icons/fa";
import LinkButton from "../components/LinkButton";
const StarRating = ({ noOfStars = 10 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  //function to handle click
  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };

  //function to handle click
  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };

  //function to handle click
  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <section className="flex flex-col w-[100vw] h-[100vh] padding-desktop max-lg:padding-tablet max-sm:padding-mobile items-center">
      <div
        aria-label="container for stars"
        className="w-full h-full items-center flex flex-col justify-center space-y-3 max-w-[900px]"
      >
        <h3 className="text-4xl text-slate-400 text-center font-dmSans font-semibold justify-start w-full h-auto">
          Rate The Application, Please
        </h3>
        <div className="border-2 border-slate-150 flex space-x-2 p-4 bg-slate-50 rounded-tl-md rounded-br-md w-full text-center justify-center">
          {Array.from({ length: noOfStars }).map((_, index) => {
            index = index + 1; //begin the index count from 1
            return (
              <FaStar
                className={index <= (hover || rating) ? "active" : "inactive"}
                onClick={() => handleClick(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                size={40}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <LinkButton text="Back to Home" path="/" marginTop="mt-14" />
      {/* takes ,e back to home*/}
    </section>
  );
};

export default StarRating;

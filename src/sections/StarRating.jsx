import { FaStar } from "react-icons/fa";
const StarRating = () => {
  return (
    <section className="flex flex-col w-[100vw] h-[100vh] padding-desktop max-lg:padding-tablet max-sm:padding-mobile items-center">
      <div
        aria-label="container for stars"
        className="w-full h-full items-center flex justify-center space-x-1"
      >
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
    </section>
  );
};

export default StarRating;

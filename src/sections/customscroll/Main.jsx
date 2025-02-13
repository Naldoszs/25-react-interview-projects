import { useContext } from "react";
import ProductContext from "../../contexts/ProductContext";

const Main = () => {
  const { isLoading, errMsg, data, scrollPercentage } =
    useContext(ProductContext);
  return (
    <main className="w-full h-auto flex flex-col max-sm:pt-[52px] pt-[10px] max-lg:pt-[38px] items-center space-y-5 text-base font-normal font-workSans text-slate-700 ">
      {/* Scroll progress indicator */}
      <div
        aria-label="scroll progress indicator container"
        className=" fixed top-[60px] w-full bg-gray-200 h-3 transition-all duration-300 ease-linear"
      >
        <div
          className="bg-green-600 h-full"
          aria-label="scroll indicator"
          style={{
            width: `${scrollPercentage}%`,
          }}
        ></div>
      </div>

      {isLoading ? (
        <h3 className="font-dmSans text-3xl font-semibold">
          Products loading...
        </h3>
      ) : errMsg ? (
        <h3 className="font-dmSans text-3xl font-semibold text-red-500">
          {`${errMsg}!!`}
        </h3>
      ) : data.length > 0 ? (
        data.map((dataItem, index) => <div key={index}>{dataItem.title}</div>)
      ) : (
        <p>No product to display</p>
      )}
    </main>
  );
};

export default Main;

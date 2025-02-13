import { useContext } from "react";
import ProductContext from "../../contexts/ProductContext";

const Footer = () => {
  const { data, scrollPercentage } = useContext(ProductContext);
  return (
    <footer className="bg-purple-800 text-white font-semibold w-full fixed bottom-0 left-0  right-0 text-center p-3 z-1000 h-[80px] flex space-y-1 justify-center items-center flex-col">
      <div>
        {data.length ? (
          <p className="text-xl">{`Number of Products: ${data.length}`}</p>
        ) : (
          <p>No product present</p>
        )}

        {/* get scroll percentage */}
        {scrollPercentage ? (
          <p className="text-base mt-2">{`You have scrolled ${scrollPercentage}% of the page`}</p>
        ) : (
          <p>0%</p>
        )}
      </div>
    </footer>
  );
};

export default Footer;

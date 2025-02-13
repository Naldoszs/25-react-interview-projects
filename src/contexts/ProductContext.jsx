import { createContext, useCallback, useEffect, useState } from "react";

const ProductContext = createContext(); // create context to be used later

//create provider function
export const ProductContextProvider = ({ children, url }) => {
  //data to share
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errMsg, setErrMsg] = useState(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!url) return;
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Not able to fetch data, Please reload the app");
        }
        const jsonData = await res.json();
        console.log(jsonData.products);
        setData(jsonData.products);
      } catch (err) {
        console.log(err.message);
        setErrMsg(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    //call the ftn
    fetchData();
  }, [url]);

  // Memoized function to calculate scroll percentage
  const handleScrollPercentage = useCallback(() => {
    //get how far we scrolled
    const scrollOffsetY = window.scrollY; //get ur scroll position
    const viewPortHeight = window.innerHeight; //get viewport height
    const totalScrollHeight = document.documentElement.scrollHeight; //gets the page height
    const scrollableAreaHeight = totalScrollHeight - viewPortHeight;
    //get the scroll ratio in percentage
    if (scrollableAreaHeight > 0) {
      const scrolledPercentage = (scrollOffsetY / scrollableAreaHeight) * 100;
      setScrollPercentage(scrolledPercentage);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, [handleScrollPercentage]);

  return (
    <ProductContext.Provider
      value={{
        data,
        setData,
        isLoading,
        setIsLoading,
        errMsg,
        setErrMsg,
        scrollPercentage,
        setScrollPercentage,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;

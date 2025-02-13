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
    const scrollTop = window.scrollY; // gives how far u scrolled from top to curnt position in px
    const viewPortHeight = window.innerHeight; //gives height of current viewport
    const totalDocHeight = document.documentElement.scrollHeight; // gives total page height[ wid the one to scroll inclusive]
    const docHeight = totalDocHeight - viewPortHeight; //gives total scrollable area

    if (docHeight > 0) {
      const scrolled = (scrollTop / docHeight) * 100; // gives scroll ratio in percentage
      setScrollPercentage(scrolled);
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

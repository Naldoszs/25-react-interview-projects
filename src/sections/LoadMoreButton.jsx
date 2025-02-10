import { useEffect, useState } from "react";
import LinkButton from "../components/LinkButton";
import Button from "../components/Button";

const LoadMoreButton = ({
  skip = 0,
  limit = 20,
  url = "",
  count,
  setCount,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [disabledButton, setDisabledButton] = useState(false);

  //first useEffect: for API calls
  // fetch D API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);

        const res = await fetch(`${url}?limit=${limit}&skip=${skip}`);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const fetchedProducts = await res.json();

        setProducts((prevFetchedProducts) => {
          if (count > prevFetchedProducts.length / limit) {
            // Load more products
            const newProducts = fetchedProducts.products.filter(
              (newItem) =>
                !prevFetchedProducts.some(
                  (prevItem) => prevItem.id === newItem.id
                )
            );
            // console.log(newProducts);
            return [...prevFetchedProducts, ...newProducts];
          } else {
            // Remove the last batch of products when decreasing count
            return prevFetchedProducts.slice(0, limit * count);
          }
        });
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [count]); // Re-fetch when count changes

  //second useEffect: fetchedProducts
  useEffect(() => {
    //check if product is 100
    if (products && products.length === 100) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  }, [products]);
  return (
    <section className="flex flex-col w-full min-h-[100vh] padding-desktop max-lg:padding-tablet max-sm:padding-mobile items-center justify-center">
      <p className="text-4xl font-medium mb-4 font-dmSans tracking-wide">
        Products
      </p>
      <div
        aria-label="container"
        className="grid grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-1 gap-[0.625rem]"
      >
        {/* the first expression */}
        {isLoading && (
          <p className="text-2xl font-workSans">
            Products is loading, Please wait...
          </p>
        )}
        {fetchError ? (
          <p className="text-2xl font-workSans text-red-500">{`${fetchError}!!`}</p>
        ) : products && products.length ? (
          products.map((product) => (
            // the individual product rendered
            <div
              key={product.id}
              className="flex flex-col border-[1.99999999px] border-black border-opacity-10 rounded-sm p-2"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="select-none"
              />
              <p className="text-md font-workSans font-normal w-full select-none text-center bg-black bg-opacity-5 p-1 rounded-sm">
                {product.title}
              </p>
            </div>
          ))
        ) : null}
      </div>
      {/* back to home btn */}

      {/* the load more btn */}
      {/* positioned in the section */}
      <div
        className="flex flex-col w-full h-auto items-center space-y-5 items-between"
        role="niyi"
      >
        {products && products.length ? (
          <div
            role="buttons wrapper"
            className="w-[80%] max-lg:w-[80%] space-x-2 max-md:w-[90%] max-xl:w-[80%] max-sm:w-[60%] flex max-sm:flex-col  max-sm:space-y-2  max-sm:space-x-0 justify-center mt-6"
          >
            <Button
              text="Load more products"
              backgroundColor="bg-black"
              color="text-white"
              borderWeight="border-2"
              borderColor="border-transparent"
              hoverTextColor="hover:text-white"
              hoverColor="hover:bg-green-500"
              hoverBorderColor="hover:border-transparent"
              maxWidth="max-w-none"
              minWidth="min-w-none"
              onClick={() => setCount(count + 1)}
              disabled={disabledButton}
              disabledBgColor={`${disabledButton ? "opacity-10 cursor-not-allowed" : ""}`}
            />

            {/* second button */}
            <Button
              text="Show less products"
              backgroundColor="bg-transparent"
              color="text-black"
              borderWeight="border-2"
              borderColor="border-slate-400"
              hoverTextColor="hover:text-white"
              hoverColor="hover:bg-red-500"
              hoverBorderColor="hover:border-transparent"
              maxWidth="max-w-none"
              minWidth="min-w-none"
              onClick={() => {
                if (count > 1) {
                  setCount(count - 1);
                }
              }}
            />
          </div>
        ) : null}
        {/* render a msg if products is equal or greater than 100*/}
        {disabledButton ? (
          <p className="text-center text-red-500 text-xl w-full font-medium">
            ⚡WARNING: Your have reached 100-limit of products to display!!!
          </p>
        ) : null}
      </div>

      <LinkButton text="Back to Home" path="/" marginTop="mt-14" />
    </section>
  );
};

export default LoadMoreButton;

//border-2 border-red-500
//border-2 border-purple-500
//border-2 border-green-500

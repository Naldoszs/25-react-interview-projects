import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { ProductContextProvider } from "../../contexts/ProductContext";

const CustomScrollIndicator = () => {
  return (
    <section className="flex flex-col w-full min-h-[100vh] padding-desktop max-lg:padding-tablet max-sm:padding-mobile items-center overflow-x-auto justify-start">
      <Header />
      <ProductContextProvider url={"https://dummyjson.com/products?limit=120"}>
        <Main />
        <Footer />
      </ProductContextProvider>
    </section>
  );
};

export default CustomScrollIndicator;

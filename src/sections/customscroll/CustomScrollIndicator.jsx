import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { ProductContextProvider } from "../../contexts/ProductContext";
import LinkButton from "../../components/LinkButton";

const CustomScrollIndicator = () => {
  return (
    <section className="flex flex-col w-full min-h-[100vh] padding-desktop max-lg:padding-tablet max-sm:padding-mobile items-center overflow-x-auto justify-start mb-[80px]">
      <Header />
      <ProductContextProvider url={"https://dummyjson.com/products?limit=120"}>
        <Main />
        <Footer />
      </ProductContextProvider>
      <LinkButton text="Back to Home" path="/" marginTop="mt-14" />
    </section>
  );
};

export default CustomScrollIndicator;

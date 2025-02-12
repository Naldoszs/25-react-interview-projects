import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./sections/HomePage";
import Accordion from "./sections/Accordion";
import HexColor from "./sections/HexColor";
import StarRating from "./sections/StarRating";
import ImageSlider from "./sections/ImageSlider";
import LoadMoreButton from "./sections/LoadMoreButton";
import { useState } from "react";
import TreeView from "./sections/treeview-section/TreeView";
import menuData from "./constants/menuData";

const App = () => {
  const [count, setCount] = useState(1);
  return (
    <main className="flex flex-col w-full min-h-screen justify-start">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/components/accordion" element={<Accordion />}></Route>
          <Route path="/components/hexcolor" element={<HexColor />}></Route>
          <Route
            path="/components/star-rating"
            element={<StarRating />}
          ></Route>
          <Route
            path="/components/image-slider"
            element={
              <ImageSlider
                url="https://picsum.photos/v2/list"
                page={"1"}
                limit={"20"}
              />
            }
          ></Route>
          <Route
            path="/components/load-more-button"
            element={
              <LoadMoreButton
                // skip={count === 0 ? 0 : count * 20}
                skip={(count - 1) * 20} // Ensures first load starts at 0
                count={count}
                setCount={setCount}
                limit={"20"}
                url="https://dummyjson.com/products"
              />
            }
          ></Route>
          <Route
            path="/components/tree-view-menu"
            element={<TreeView menuData={menuData} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;

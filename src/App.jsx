import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./sections/HomePage";
import Accordion from "./sections/Accordion";
import HexColor from "./sections/HexColor";
import StarRating from "./sections/StarRating";
import ImageSlider from "./sections/ImageSlider";
import LoadMoreButton from "./sections/LoadMoreButton";

const App = () => {
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
            element={<LoadMoreButton />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;

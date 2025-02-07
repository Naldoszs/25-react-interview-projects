import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./sections/HomePage";
import Accordion from "./sections/Accordion";
import HexColor from "./sections/HexColor";
import StarRating from "./sections/StarRating";

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
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;

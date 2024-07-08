import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header1 from "./Components/Header1/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import CardsPage from "./Pages/page";
import About from "./Pages/About/About";
import BehindUs from "./Pages/BehindUs/BehindUs";
import AllPages from "./Pages/Combined/AllPages";

const App = () => {
  return (
    <BrowserRouter>
      <Header1 />
      <Routes>
        <Route path="/" element={<AllPages />} />
        <Route path="/pre" element={<CardsPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/behindUs" element={<BehindUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

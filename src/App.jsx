import "./App.css";
import "./index.css";
import Navbar from "./component/Navbar";
import Home from "./component/pages/Home";
import Footer from "./component/Footer";
import About from "./component/pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from "./component/pages/Blog";
import Contact from "./component/pages/Contact";
import Accessories from "./component/Products/Accessories";
import EarBuds from "./component/Products/Earbuds";
import Headphones from "./component/Products/Headphones";
import Speaker from "./component/Products/Speaker";
import SingleProduct from "./component/pages/SingleProduct";
import OurProducts from "./component/pages/OurProducts";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Pages" element={<Blog />} />
        <Route path="/" element={<Home />} />
        <Route path="/SingleProduct/:id" element={<SingleProduct />} />
        <Route path="/Earbuds" element={<EarBuds />} />
        <Route path="/Headphones" element={<Headphones />} />
        <Route path="/Speaker" element={<Speaker />} />
        <Route path="/Accessories" element={<Accessories />} />
        <Route path="/OurProducts" element={<OurProducts />} />
        {/* <Route path="/" element={<FeaturedProducts />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

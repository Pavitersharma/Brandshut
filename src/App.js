import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import Footer from "./component/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listing from "./component/Listing";
import Product from "./component/Product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Listing" element={<Listing/>}/>
          <Route path="/final" element={<Product/>}/>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

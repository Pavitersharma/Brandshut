import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import Footer from "./component/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listing from "./component/Listing";
import Product from "./component/Product";
import Cart from "./component/Cart";
import Checkout from "./component/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Listing" element={<Listing/>}/>
          <Route path="/final" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

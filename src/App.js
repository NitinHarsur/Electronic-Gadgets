import React from "react";
import "./App.css";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import  Navbar  from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import Contact from "./pages/contact";
import About from "./pages/about";
import Login from "./pages/login";
import Footer from "./components/footer";
function App() {
  return (<>
    <div className="App">
      <ShopContextProvider>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/reg"  />
          </Routes>
          </BrowserRouter>
      </ShopContextProvider>
    </div>
    <Footer/>
    </> );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { lazy, useEffect } from "react";
import Navbar from "./components/welcome/navbar.tsx";
import { useDispatch } from "react-redux";
import { addMultipleProducts } from "./store/productSlice.ts";
const WelcomePage = lazy(() => import("./components/welcome"));
const Shop = lazy(() => import("./components/shop"));
const ProductPage = lazy(
  () => import("../src/components/product-page")
);
const AboutVesta = lazy(() => import("./components/about/index.tsx"));
const ContactPage = lazy(() => import("./components/contact/index.tsx"));
const Footer = lazy(() => import("./components/welcome/footer.tsx"));

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    const localProducts = localStorage.getItem("products");
    const parseData = localProducts ? JSON.parse(localProducts) : [];
    if(parseData?.length > 0){
      dispatch(addMultipleProducts(parseData))
    }
  },[])
  return (
    <>
      <ToastContainer />
      <Router>
        <Navbar />
        <Routes>
          <Route element={<WelcomePage />} path="/" />
          <Route element={<Shop />} path="/shop" />
          {/* <Route element={<ProductPage />} path="/collection/:status/:id" /> */}
          <Route element={<ProductPage />} path="/shop/:id" />
          <Route element={<AboutVesta />} path="/about" />
          <Route element={<ContactPage />} path="/contact" />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Product from "../Routes/Product"
import Login from "./Login";
import Cart from "../Components/Cart";
import Payment from "../Components/Payment"
import Final from "../Components/Final";
import MyOrder from "../Components/Myorder";


function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbar/>} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Myorder" element={<MyOrder />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/final" element={<Final />} />
      </Routes>
      </>
  );
}

export default AllRoutes;

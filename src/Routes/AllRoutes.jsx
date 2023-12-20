import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Product from "../Routes/Product"
import Login from "./Login";
import Cart from "../Components/Cart";
import Payment from "../Components/Payment"
import Final from "../Components/Final";
import MyOrder from "../Components/Myorder";
import SingleProductPage from "./SingleProductPage";
import Signup from "./Signup";
import { PrivateRoute } from "./PrivateRoute";

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbar/>} />
        <Route path="/product" element={<PrivateRoute><Product /></PrivateRoute>} />
        <Route path="/product/:id" element={<SingleProductPage/>}  />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<PrivateRoute><Cart /> </PrivateRoute>} />
        <Route path="/Myorder" element={<PrivateRoute><MyOrder /></PrivateRoute>} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/final" element={<Final />} />
      </Routes>
      </>
  );
}

export default AllRoutes;

import './App.css';
import { useEffect, useState } from "react"
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer.js"
import Home from "./component/Home/Home.js";
import Loader from './component/layout/Loader/Loader';
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
//import ProtectedRoute from "./component/Route/ProtectedRoute";
import Search from "./component/Product/Search.js";
import LoginSignUp from './component/User/LoginSignUp';
import store from "./store";
import { loadUser } from './actions/userAction';
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from 'react-redux';
import Profile from "./component/User/Profile.js";
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
// forgot password
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import axios from "axios";
import Payment from "./component/Cart/Payment.js";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import OrderSuccess from "./component/Cart/OrderSuccess.js";
import MyOrders from "./component/Order/Myorders.js";
import OrderDetails from "./component/Order/OrderDetails.js";  
//import Dashboard from "./component/Admin/Dashboard.js";
//import ProductList from "./component/Admin/ProductList.js";
//import ProductList from "./component"

function App() {

  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");
  async function getStripeApiKey() {
  const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "chilanka"],
      },
    });


    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);
  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sad" element={<Loader />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />

        <Route path="/search" element={<Search />} />


        <Route path="/account" element={<Profile />} />
        <Route path="/me/update" element={<UpdateProfile />} />
        <Route path="/password/update" element={<UpdatePassword />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login/shipping" element={<Shipping />} />


        {stripeApiKey && (
          <Route path="/process/payment" element={<Elements stripe={loadStripe(stripeApiKey)}><Payment /></Elements>} />
        )}

        <Route path="/success" element={<OrderSuccess />} />
        
        <Route path="/orders" element={<MyOrders />} />

        
        <Route path="/order/confirm" element={<ConfirmOrder />} />
        <Route path="/order/:id" element={<OrderDetails />} />
        {/* <Route isAdmin={true} path="/admin/dashboard" element={<Dashboard  />} /> */}
        {/* <Route  path="/admin/products" isAdmin={true} element={<ProductList  />} /> */}
      </Routes>
      <Footer />
    </Router>

  );

}

export default App;

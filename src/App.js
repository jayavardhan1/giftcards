import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes, useLocation} from 'react-router-dom';

import './App.css';
import Navbar from "./Components/navbar/Navbar";
import Cart from "./Components/Cart";
import Home from "./screen/home/Home";
import WishList from "./Components/wishlist/WishList";
import Account from "./screen/Account/Account";
import ProductPage from "./Components/ProductPage/ProductPage";
import LoginPage from "./Components/Auth/LoginPage";
import ProductListing from "./screen/ProductListing/ProductListing";
import {ToastContainer} from "react-toastify";
import DraggableBoxes from "./Components/DraggableBoxes/DraggableBoxes";
import Clients from "./Components/admin/Client/Clients";
import AdminHome from "./screen/adminHome/AdminHome";
import EditClient from "./Components/admin/Client/EditClient";

function Product() {
    return <h1>Product</h1>;
}
const isAuthenticated = true; // Change this to true to simulate an authenticated user


function App() {
  return (
      <>
          <Router>
              <ConditionalNavbar />
              <Routes>
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
                  <Route path="/product/:id" element={<ProductPage/>} />
                  <Route path="/cart" element={<Cart />}  />
                  <Route path="/wishlist" element={<WishList />} />
                  <Route path="/account/*" element={<Account />} />
                  <Route path="/ProductListing" element={<ProductListing />} />
                  <Route path="funny" element={ <DraggableBoxes />} />
                  <Route path="/admin/*" element={<AdminHome />} />
              </Routes>
          </Router>
          <ToastContainer />
      </>
  );
}
function ConditionalNavbar() {
    const location = useLocation();
    if (location.pathname === '/login'||location.pathname==='/funny'||location.pathname.includes('/admin')) {
        return null;
    }
    return <Navbar />;
}
export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
          <Route path="/shipping" element={<ShippingScreen />} />
          <Route path="/payment" element={<PaymentScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart/:id?" element={<CartScreen />} />
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

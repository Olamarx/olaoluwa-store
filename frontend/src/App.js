import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

function App() {
  // const match = useRouteMatch
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={
          <>
            <main className="py-3">
              <Container>
                <HomeScreen />
              </Container>
            </main>
          </>
        } />
        
        <Route path="/product/:id" element={          
          <>
            <main className="py-3">
              <Container>
                <ProductScreen /> 
              </Container>
            </main>
          </>
        } />

        <Route path="/cart/:id?" element={          
          <>
            <main className="py-3">
              <Container>
                <CartScreen /> 
              </Container>
            </main>
          </>
        } />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

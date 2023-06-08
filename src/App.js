import React from "react";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./cart";
import Card from "./card";
import Navbar from "./Navbar";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const itemExists = cartItems.some((item) => item.id === product.id);
    if (!itemExists) {
      setCartItems([...cartItems, product]);
    } else {
      alert("Item alredy is cart ");
    }
  };
  const deleteItem = (itemId) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);
  };

  const products = [
    { id: 1, name: "Product 1", description: "Description 1" },
    { id: 2, name: "Product 2", description: "Description 2" },
    { id: 3, name: "Product 3", description: "Description 3" },
  ];
  return (
    <>
      <Router>
        <main>
          <Navbar />
          <div style={{ display: "flex", gap: "10px", padding: "10px " }}>
            {products.map((product) => (
              <Card key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </main>

        <Routes>
          <Route path="/card" element={<Card />} />
          <Route
            path="/cart"
            element={<Cart items={cartItems} deleteItem={deleteItem} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;

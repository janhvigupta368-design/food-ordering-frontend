import React, { useState } from "react";
import FoodItem from "./components/FoodItem";
import Cart from "./components/Cart";
import "./styles/index.css";

const foodData = [
  { id: 1, name: "Pizza", price: 200 },
  { id: 2, name: "Burger", price: 100 },
  { id: 3, name: "Pasta", price: 150 },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existing = cart.find((i) => i.id === item.id);
    if (existing) {
      setCart(cart.map((i) => i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  return (
    <div className="container">
      <h1>Food Ordering Website</h1>
      <div className="content">
        <div className="menu">
          {foodData.map(item => (
            <FoodItem key={item.id} item={item} addToCart={addToCart} />
          ))}
        </div>
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}

export default App;

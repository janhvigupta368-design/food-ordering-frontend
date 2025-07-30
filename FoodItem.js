import React from "react";

function FoodItem({ item, addToCart }) {
  return (
    <div className="food-item">
      <h3>{item.name}</h3>
      <p>₹{item.price}</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
}

export default FoodItem;

import React, { useState } from 'react';

const ItemCount = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(Math.max(quantity - 1, 1));

  return (
    <div>
      <h6>Quantity</h6>
      <button onClick={handleDecrement}>-</button>
      <span>{quantity}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default ItemCount;
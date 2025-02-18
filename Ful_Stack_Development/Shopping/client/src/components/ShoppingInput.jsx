import React, { useState } from "react";

function ShoppingInput({ addItem }) {
  const [item, setItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!item.trim()) return; // Prevent empty items

    addItem(item);
    setItem(""); // Clear input field
  }

  return (
    <form onSubmit={handleSubmit} className="shopping-input">
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Enter an item..."
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ShoppingInput;

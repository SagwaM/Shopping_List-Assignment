import React from "react";

function ShoppingItem({ item, deleteItem }) {
  return (
    <div className="shopping-item">
      <span>{item.text}</span>
      <button onClick={() => deleteItem(item.id)}>❌</button>
    </div>
  );
}

export default ShoppingItem;


import React from "react";
import ShoppingItem from "./ShoppingItem";

function ShoppingList({ items, deleteItem }) {
  return (
    <div className="shopping-list">
      {items.length === 0 ? (
        <p className="empty-message">Your shopping list is empty!</p>
      ) : (
        items.map((item) => (
          <ShoppingItem key={item.id} item={item} deleteItem={deleteItem} />
        ))
      )}
    </div>
  );
}

export default ShoppingList;

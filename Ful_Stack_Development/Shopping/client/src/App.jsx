import React, { useState, useEffect } from "react";
import ShoppingInput from "./components/ShoppingInput";
import ShoppingList from "./components/ShoppingList";
import "./styles/app.css"; // Import CSS

function App() {
  const [items, setItems] = useState([]);

  // Load saved items from localStorage
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("shoppingItems"));
    if (savedItems) setItems(savedItems);
  }, []);

  // Save items to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem("shoppingItems", JSON.stringify(items));
  }, [items]);

  function addItem(text) {
    const newItem = { id: Date.now(), text };
    setItems([...items, newItem]);
  }

  function deleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <div className="container">
      <h1>Shopping List</h1>
      <ShoppingInput addItem={addItem} />
      <ShoppingList items={items} deleteItem={deleteItem} />
    </div>
  );
}

export default App;

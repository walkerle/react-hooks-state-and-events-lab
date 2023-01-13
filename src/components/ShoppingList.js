import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All")

  const categoryHandler = (e) => {
    setSelectedCategory(selectedCategory => selectedCategory = e.target.value);
  }
  
  // .filter takes in an Array an returns a copied filtered Array of elements that pass a true/false test
  // the State hook and handler set the true/false test against the passed in prop which is an Array
  // The copied filtered Array is what I want passed into the Array.map
  const itemsToDisplay = items.filter(item => {
    if(selectedCategory === "All") {
      return true;
    } else {
      return item.category === selectedCategory;
    }
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={categoryHandler}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

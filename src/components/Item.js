import React, { useState } from "react";

function Item({ name, category }) {

  const [cartToggle, setCartToggle] = useState(false)
  
  const handleToggle = (e) => {
    // console.log('clicked');
    setCartToggle(cartToggle => !cartToggle);
    // console.log(cartToggle);

  }

  return (
    <li className={cartToggle ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cartToggle ? "remove" : "add"} onClick={handleToggle}>{cartToggle ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;

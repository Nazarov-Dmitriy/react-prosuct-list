import React from "react";
import ShopItem from "./ShopItem";

export default function ListView(props) {
  return (
    <div className="container ">
      <div className="row g-2">
        {props.products.map((item, i) => (
          <ShopItem item={item} key={i} />
        ))}
      </div>
    </div>
  );
}

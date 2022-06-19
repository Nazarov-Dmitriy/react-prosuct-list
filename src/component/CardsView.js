import React from "react";
import ShopCard from "./ShopCard";

export default function CardsView(props) {
  return (
    <div className="container ">
      <div className="row  row-cols-2 row-cols-lg-3 g-2 g-lg-3">
        {props.products.map((item, i) => (
          <ShopCard item={item} key={i} />
        ))}
      </div>
    </div>
  );
}

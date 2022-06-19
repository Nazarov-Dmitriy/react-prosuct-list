import React from "react";

export default function ShopItem(props) {
  const { item } = props;

  return (
    <div className="list d-flex justify-content-between align-items-center ">
      <img src={item.img} alt={item.name} />
      <h3 className="card-title text-center">{item.name}</h3>
      <div className="card-text text-center">{item.color}</div>
      <div className="text-danger fs-5">${item.price}</div>
      <button className="text-danger rounded-pill border-danger">
        ADD TO CART
      </button>
    </div>
  );
}

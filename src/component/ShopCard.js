import React from "react";

export default function ShopCard(props) {
  const { item } = props;
  return (
    <div className="col">
      <div
        className="card p-3 d-flex justify-content-between "
        style={{ backgroundImage: "url(" + item.img + ")" }}
      >
        <div className="header">
          <h3 className="card-title text-center">{item.name}</h3>
          <p className="card-text text-center">{item.color}</p>
        </div>
        <div className="footer d-flex justify-content-between">
          <div className="text-danger fs-5">${item.price}</div>
          <button className="text-danger rounded-pill border-danger">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

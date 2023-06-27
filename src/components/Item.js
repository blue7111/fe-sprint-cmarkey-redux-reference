import React from "react";

export default function Item({ item, handleClick }) {
  return (
    <li key={item.id} className="item">
      <img className="item-img" src={item.img} alt={item.name}></img>
      <span className="item-name" data-testid={item.name}>
        {item.name}
      </span>
      <span className="item-price">{item.price}</span>
      <button
        className="item-button"
        onClick={(e) => handleClick(e, item.id)}
        aria-label={`${item.name} 품목 ${item.price}원 장바구니 담기`}
      >
        장바구니 담기
      </button>
    </li>
  );
}

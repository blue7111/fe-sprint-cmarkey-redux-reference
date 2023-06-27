import React from "react";

export default function CartItem({
  item,
  checkedItems,
  handleCheckChange,
  handleQuantityChange,
  handleDelete,
  quantity,
}) {
  return (
    <li className="cart-item-body">
      <input
        type="checkbox"
        className="cart-item-checkbox"
        onChange={(e) => {
          handleCheckChange(e.target.checked, item.id);
        }}
        checked={checkedItems.includes(item.id) ? true : false}
      ></input>
      <div className="cart-item-thumbnail">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="cart-item-info">
        <h4 className="cart-item-title" data-testid={`cart-${item.name}`}>
          {item.name}
        </h4>
        <span className="cart-item-price">{item.price} 원</span>
      </div>
      <input
        type="number"
        min={1}
        className="cart-item-quantity"
        value={quantity}
        onChange={(e) => {
          if (quantity) handleQuantityChange(Number(e.target.value), item.id);
        }}
        aria-label={`현재 ${item.name} 품목의 선택 수량은 ${quantity}개 입니다. 수량을 입력해 주세요.`}
      ></input>
      <button
        className="cart-item-delete"
        onClick={() => {
          handleDelete(item.id);
        }}
        aria-label={`${item.name} 품목 삭제 버튼`}
      >
        삭제
      </button>
    </li>
  );
}

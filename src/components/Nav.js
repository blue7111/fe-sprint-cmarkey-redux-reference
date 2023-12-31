import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Nav() {
  const state = useSelector((state) => state.itemReducer);

  return (
    <header id="nav-body">
      <h1 id="title">
        <Link to="/">
          <img id="logo" src="../logo.png" alt="logo" />
          <span id="name">CMarket</span>
        </Link>
      </h1>

      <nav id="menu">
        <Link to="/">상품리스트</Link>
        <Link to="/shoppingcart">
          장바구니<span id="nav-item-counter">{state.cartItems.length}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Nav;

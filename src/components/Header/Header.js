import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <a href="/order">Order</a>
        <a href="/orderReview">Order Review</a>
        <a href="/manageInventory">Manage Inventory</a>
      </div>
    </nav>
  );
};

export default Header;

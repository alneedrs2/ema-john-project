import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import("./Product.css");

const Product = ({ product, handleAddToCart }) => {
  // const { product, handleAddToCart } = props;
  const { img, name, price, seller, ratings } = product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <h5>Price : ${price}</h5>
        <p>Manufacturer: {seller}</p>
        <p>Ratings: {ratings} stars</p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        <p>Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;

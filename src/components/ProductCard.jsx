import React from "react";
import "./ProductCart.css";
function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      </div>
      <div className="product-details">
        <div className="product-category">
          {product.category}
        </div>
        <div className="product-name">
          {product.name}
        </div>
        <div className="rating">
          ⭐ {product.rating}
        </div>
        <div className="price-section">
          <span className="product-price">
            ₹{product.price}
          </span>
          <span className="discount">
            {product.discount}% off
          </span>
        </div>
        <div className="stock">
          {product.stock}
        </div>
        <button
          className="add-cart-btn"
          disabled={product.stock === "Out of Stock"}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
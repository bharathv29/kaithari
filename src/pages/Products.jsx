import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/Products.js";
import "./product.css";

function Products() {
  return (
    <div className="products-page">

      <h1>Products</h1>

      <div className="main-container">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </div>
  );
}

export default Products;
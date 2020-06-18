import React from "react";
import ProductItem from "../components/ProductItem";
export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      <div className="row">
        <div className="col-4">
          <ProductItem />
        </div>
      </div>
    </div>
  );
}

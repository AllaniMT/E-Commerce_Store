import React, { Component } from "react";
import ProductItem from "../components/ProductItem";
import { FetchAllProducts } from "../api/FetchApi";
export default class ProductsPage extends Component {
  state = {
    allFetchedProductState: [],
  };
  componentDidMount() {
    FetchAllProducts().then((data) => {
      this.setState({ allFetchedProductState: data });
    });
  }
  render() {
    return (
      <div>
        <h1>Products</h1>
        <div className="row">
          {this.state.allFetchedProductState.map((product) => (
            <div className="col-4" key={product.id}>
              <ProductItem product={product} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

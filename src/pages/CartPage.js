import React, { Component } from "react";
import CartItem from "../components/CartItem";
import { FetchAllProducts } from "../api/FetchApi";
export default class CartPage extends Component {
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
      <div className="my-2">
        <h1>Cart</h1>
        <div className="row">
          {this.state.allFetchedProductState.map((product) => (
            <div className="col-3" key={product.id}>
              <CartItem product={product} />
            </div>
          ))}
        </div>
        <br />
        <h3>Totla: 3000$</h3>
        <br />
        <button className="my-3 btn btn-primary btn-block">Pay</button>
      </div>
    );
  }
}

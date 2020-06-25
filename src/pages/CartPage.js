import React, { Component } from "react";
import CartItem from "../components/CartItem";
import { FetchAllProducts } from "../api/FetchApi";
import { connect } from "react-redux";
class CartPage extends Component {
  render() {
    return (
      <div className="my-2">
        <h1>Cart</h1>
        <div className="row">
          {this.props.cartItem.map((item) => (
            <div className="col-3" key={item.product.id}>
              <CartItem item={item} />
            </div>
          ))}
        </div>
        <br />
        <h3>Total: {this.props.total}</h3>
        <br />
        <button className="my-3 btn btn-primary btn-block">Pay</button>
      </div>
    );
  }
}
//chnoa data ili mest7a9ha ml centrale state
const mapStateToProps = (state) => {
  return {
    cartItem: state.cart,
    total: state.cart.reduce(
      (total, item) => total + item.quantity * item.product.price,
      0
    ),
  };
};

export default connect(mapStateToProps)(CartPage);

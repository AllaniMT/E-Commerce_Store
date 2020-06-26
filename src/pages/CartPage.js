import React, { Component } from "react";
import { connect } from "react-redux";

import CartItem from "../components/CartItem";
import { FetchAllProducts } from "../api/FetchApi";
import { clearCart } from "../store/actions/actions";

class CartPage extends Component {
  placeOrder = () => {
    this.props.clearCart();
    alert("We recieved your order, and we work on it");
  };
  render() {
    return (
      <div className="my-2">
        <h1>Cart</h1>
        <div className="row">
          {/** hier gibt es einen Fehler CatITem oder CartItems */}
          {this.props.cartItem.map((item, index) => (
            <div className="col-3" key={item.product.id}>
              <CartItem item={item} index={index} />
            </div>
          ))}
        </div>
        <br />
        <h3>Total: {this.props.total}</h3>
        <br />
        <button
          onClick={this.placeOrder}
          className="my-3 btn btn-primary btn-block"
        >
          Place order
        </button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(clearCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);

import React, { Component } from "react";
import { getProductById } from "../api/FetchApi";
import { connect } from "react-redux";
import { addToCart } from "../store/actions/actions";
class ProductPage extends Component {
  state = {
    product: {},
    loading: true,
    quantity: 0,
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    getProductById(parseInt(id)).then((product) => {
      this.setState({
        product,
        loading: false,
      });
    });
  }
  handleQuantity = (event) => {
    const value = event.target.value;
    if (value < 0) {
      return;
    } else {
      this.setState({
        quantity: value,
      });
    }
  };
  addToCart = (product) => {
    this.props.addToCart(product, this.state.quantity);
  };
  render() {
    if (this.state.loading) {
      return " Loading...";
    }
    const { product } = this.state;
    const { quantity } = this.state;
    

    return (
      <div>
        <div className="row">
          <div className="col-6">
            <img src={product.image} width="100%" />
          </div>
          <div className="col-6">
            <h1>{product.name}</h1>
            <p>Price: {product.price}$</p>
            <p>{product.description}</p>
            <br />
            <br />
            <input
              value={quantity}
              type="number"
              onChange={this.handleQuantity}
            />
            <br />
            <br />
            <p>Total: {quantity * product.price}</p>
            <button
              className="btn btn-primary"
              onClick={() => this.addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productInfo, quantity) =>
      dispatch(addToCart(productInfo, quantity)),
  };
};
//null as first parameter because we dont need state
export default connect(null, mapDispatchToProps)(ProductPage);

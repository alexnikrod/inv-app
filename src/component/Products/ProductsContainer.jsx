import React from "react";
import { connect } from "react-redux";

import Products from "./Products";
import {
  fetchProducts,
  fetchDeleteProducts,
  fetchPutProducts,
  fetchEditProducts
} from "../../redux/productsReducer";

class ProductsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  deleteProduct = (id) => (event) => {
    event.preventDefault(event);
    this.props.fetchDeleteProducts(id);
  };

  render() {
    return (
      <Products
        {...this.props}
        products={this.props.products}
        onDelete={this.deleteProduct}
        addNew={this.props.fetchPutProducts}
        update={this.props.fetchEditProducts}
      />
    );
  }
}

const mapStateToProps = (store) => {
  return {
    products: store.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: (payload) => dispatch(fetchProducts(payload)),
    fetchDeleteProducts: (payload) => dispatch(fetchDeleteProducts(payload)),
    fetchPutProducts: (payload) => dispatch(fetchPutProducts(payload)),
    fetchEditProducts: (payload) => dispatch(fetchEditProducts(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);

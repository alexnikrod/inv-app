import React from "react";
import { connect } from "react-redux";

import History from "./History";
import { fetchCustomers } from "../../redux/customersReducer";
import { fetchProducts } from "../../redux/productsReducer";
import {
  fetchHistory,
  fetchDeleteHistory,
  fetchEditHistory,
} from "../../redux/historyReducer";

class HistoryContainer extends React.Component {
  componentDidMount() {
    this.props.fetchHistory();
    this.props.fetchCustomers();
    this.props.fetchProducts();
  }

  deleteRecord = (id) => (event) => {
    event.preventDefault(event);
    this.props.fetchDeleteHistory(id);
  };

  render() {
    const { customers } = this.props.customers;
    const { products } = this.props.products;

    return (
      <History
        {...this.props}
        history={this.props.history}
        customers={customers}
        products={products}
        onDelete={this.deleteRecord}
        update={this.props.fetchEditHistory}
      />
    );
  }
}

const mapStateToProps = (store) => {
  return {
    history: store.history,
    customers: store.customers,
    products: store.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHistory: (payload) => dispatch(fetchHistory(payload)),
    fetchDeleteHistory: (payload) => dispatch(fetchDeleteHistory(payload)),
    fetchEditHistory: (payload) => dispatch(fetchEditHistory(payload)),
    fetchCustomers: (payload) => dispatch(fetchCustomers(payload)),
    fetchProducts: (payload) => dispatch(fetchProducts(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer);

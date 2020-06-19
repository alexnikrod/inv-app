import React from "react";
import { connect } from "react-redux";

import Invoices from "./Invoices";
import {
  fetchInvoices,
  fetchDeleteInvoice,
  fetchPutInvoices,
  fetchEditInvoices,
} from "../../redux/invoicesReducer";
import {
  fetchCustomers,
  fetchPutCustomers,
} from "../../redux/customersReducer";
import { fetchProducts } from "../../redux/productsReducer";
import { fetchPutHistory } from "../../redux/historyReducer";

class InvoicesContainer extends React.Component {
  componentDidMount() {
    this.props.fetchInvoices();
    this.props.fetchCustomers();
    this.props.fetchProducts();
  }

  deleteInvoice = (id) => (event) => {
    event.preventDefault(event);
    console.log("container: ", id)
    this.props.fetchDeleteInvoice(id);
  };

  render() {
    const { customers } = this.props.customers;
    const { products } = this.props.products;

    return (
      <Invoices
        {...this.props}
        invoices={this.props.invoices}
        customers={customers}
        products={products}
        onDelete={this.deleteInvoice}
        addNew={this.props.fetchPutInvoices}
        update={this.props.fetchEditInvoices}
        addNewCustomer={this.props.fetchPutCustomers}
        sendToHistory={this.props.fetchPutHistory}
        finish={this.props.fetchDeleteInvoice}
      />
    );
  }
}

const mapStateToProps = (store) => {
  return {
    invoices: store.invoices,
    customers: store.customers,
    products: store.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInvoices: (payload) => dispatch(fetchInvoices(payload)),
    fetchCustomers: (payload) => dispatch(fetchCustomers(payload)),
    fetchProducts: (payload) => dispatch(fetchProducts(payload)),
    fetchDeleteInvoice: (payload) => dispatch(fetchDeleteInvoice(payload)),
    fetchPutInvoices: (payload) => dispatch(fetchPutInvoices(payload)),
    fetchEditInvoices: (payload) => dispatch(fetchEditInvoices(payload)),
    fetchPutCustomers: (payload) => dispatch(fetchPutCustomers(payload)),
    fetchPutHistory: (payload) => dispatch(fetchPutHistory(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InvoicesContainer);

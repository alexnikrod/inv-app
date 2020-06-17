import React from "react";
import { connect } from "react-redux";

import Invoices from "./Invoices";
import {
  fetchInvoices,
  fetchdeleteInvoice,
  fetchPutInvoices,
  fetchEditInvoices,
} from "../../redux/invoicesReducer";
import { fetchCustomers } from "../../redux/customersReducer";
import { fetchProducts } from "../../redux/productsReducer";

class InvoicesContainer extends React.Component {
  componentDidMount() {
    this.props.fetchInvoices();
    this.props.fetchCustomers();
    this.props.fetchProducts();
  }

  deleteInvoice = (id) => (event) => {
    event.preventDefault(event);
    this.props.fetchdeleteInvoice(id);
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
      />
    );
  }
}

const mapStateToProps = (store) => {
  return {
    invoices: store.invoices,
    customers: store.customers,
    products: store.products
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInvoices: (payload) => dispatch(fetchInvoices(payload)),
    fetchCustomers: (payload) => dispatch(fetchCustomers(payload)),
    fetchProducts: (payload) => dispatch(fetchProducts(payload)),
    fetchdeleteInvoice: (payload) => dispatch(fetchdeleteInvoice(payload)),
    fetchPutInvoices: (payload) => dispatch(fetchPutInvoices(payload)),
    fetchEditInvoices: (payload) => dispatch(fetchEditInvoices(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InvoicesContainer);

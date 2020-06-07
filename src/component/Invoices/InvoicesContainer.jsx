import React from "react";
import { connect } from "react-redux";

import Invoices from "./Invoices";
import {
  fetchInvoices,
  fetchdeleteInvoice,
  invoiceModalShow,
} from "../../redux/invoicesReducer";
import { fetchCustomers, customerModalShow } from "../../redux/customersReducer";
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
    return (
      <Invoices
        {...this.props}
        invoices={this.props.invoices}
        onDelete={this.deleteInvoice}
        invoiceModalShow={this.props.invoiceModalShow}
        customerModalShow={this.props.customerModalShow}
      />
    );
  }
}

const mapStateToProps = (store) => {
  return {
    invoices: store.invoices,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInvoices: (payload) => dispatch(fetchInvoices(payload)),
    fetchCustomers: (payload) => dispatch(fetchCustomers(payload)),
    fetchProducts: (payload) => dispatch(fetchProducts(payload)),
    fetchdeleteInvoice: (payload) => dispatch(fetchdeleteInvoice(payload)),
    invoiceModalShow: (payload) => dispatch(invoiceModalShow(payload)),
    customerModalShow: (payload) => dispatch(customerModalShow(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InvoicesContainer);

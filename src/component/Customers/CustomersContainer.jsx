import React from "react";
import { connect } from "react-redux";

import Customers from "./Customers";
import {
  fetchCustomers,
  fetchDeleteCustomer,
  fetchPutCustomers,
  fetchEditCustomers
} from "../../redux/customersReducer";

class CustomersContainer extends React.Component {
  componentDidMount() {
    this.props.fetchCustomers();
  }

  deleteCustomer = (id) => (event) => {
    event.preventDefault(event);
    this.props.fetchDeleteCustomer(id);
  };

  editCustomer = (id) => (event) => {
    event.preventDefault(event);
    const { customers } = this.props.customers;
    console.log(customers)
    const customerToEdit = customers.find(item => item.id === id)
    console.log("cutomerToEdit", customerToEdit)
    this.props.fetchEditCustomers(customerToEdit)
  }

  // editCustomer = (id, updatedCustomer) => {
  //   const { customers } = this.props.customers;
  //   let edited = customers.map(customer => (customer.id === id ? updatedCustomer : customer))

  //   console.log(updatedCustomer)
  // }

  render() {
    return (
      <Customers
        {...this.props}
        customers={this.props.customers}
        onDelete={this.deleteCustomer}
        editCustomer={this.editCustomer}
        addNew={this.props.fetchPutCustomers}
        update={this.props.fetchEditCustomers}
      />
    );
  }
}

const mapStateToProps = (store) => {
  return {
    customers: store.customers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCustomers: (payload) => dispatch(fetchCustomers(payload)),
    fetchDeleteCustomer: (payload) => dispatch(fetchDeleteCustomer(payload)),
    fetchPutCustomers: (payload) => dispatch(fetchPutCustomers(payload)),
    fetchEditCustomers: payload => dispatch(fetchEditCustomers(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomersContainer);

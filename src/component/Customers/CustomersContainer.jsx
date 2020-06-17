import React from "react";
import { connect } from "react-redux";

import Customers from "./Customers";
import {
  fetchCustomers,
  fetchDeleteCustomer,
  fetchPutCustomers,
  fetchEditCustomers,
} from "../../redux/customersReducer";

class CustomersContainer extends React.Component {
  componentDidMount() {
    this.props.fetchCustomers();
  }

  deleteCustomer = (id) => (event) => {
    event.preventDefault(event);
    this.props.fetchDeleteCustomer(id);
  };

  render() {
    return (
      <Customers
        {...this.props}
        customers={this.props.customers}
        onDelete={this.deleteCustomer}
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
    fetchEditCustomers: (payload) => dispatch(fetchEditCustomers(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomersContainer);

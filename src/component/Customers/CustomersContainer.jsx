import React from "react";
import { connect } from "react-redux";

import Customers from "./Customers";
import {
  fetchCustomers,
  fetchdeleteCustomer,
} from "../../redux/customersReducer";

class CustomersContainer extends React.Component {
  componentDidMount() {
    this.props.fetchCustomers();
  }

  deleteCustomer = (id) => (event) => {
    event.preventDefault(event);
    this.props.fetchdeleteCustomer(id);
  };

  render() {
    return (
      <Customers
        {...this.props}
        customers={this.props.customers}
        onDelete={this.deleteCustomer}
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
    fetchdeleteCustomer: (payload) => dispatch(fetchdeleteCustomer(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomersContainer);

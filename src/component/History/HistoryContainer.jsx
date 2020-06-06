import React from "react";
import { connect } from "react-redux";

import History from "./History";
import { fetchInvoices, fetchdeleteInvoice } from "../../redux/invoicesReducer";

class HistoryContainer extends React.Component {
  componentDidMount() {
    this.props.fetchInvoices();
  }

  deleteInvoice = id => event => {
    event.preventDefault(event);
    this.props.fetchdeleteInvoice(id)
};

  render() {
    return <History {...this.props} invoices={this.props.invoices} onDelete={this.deleteInvoice}/>;
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
    fetchdeleteInvoice: payload => dispatch(fetchdeleteInvoice(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer);

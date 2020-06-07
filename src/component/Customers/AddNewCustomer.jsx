import React from "react";
import { connect } from "react-redux";
import { Button, Modal, Icon, Form } from "semantic-ui-react";

import {
  customerModalShow,
  customerModalHide,
} from "../../redux/customersReducer";

class AddNewCustomer extends React.Component {
  state = { modalOpen: false };

  handleOpen = () => {
    this.props.customerModalShow();
    this.setState({ modalOpen: true });
  };

  handleClose = () => {
    this.props.customerModalHide();
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <div>
        <Modal
          dimmer={"blurring"}
          trigger={
            <Button
              color="teal"
              labelPosition="left"
              floated="left"
              icon
              size="small"
              onClick={this.handleOpen}
            >
              <Icon name="user" /> Новый клиент
            </Button>
          }
          open={this.state.modalOpen}
          onClose={this.handleClose}
        >
          <Modal.Header>Добавить нового клиента</Modal.Header>

          <Modal.Content>
            <Form>
              <Form.Field>
                <label>ФИО:</label>
                <input placeholder="Введите ФИО клиента" />
              </Form.Field>
              <Form.Field>
                <label>Паспорт:</label>
                <input placeholder="Введите номер паспорта клиента" />
              </Form.Field>
              <Form.Field>
                <label>Адрес:</label>
                <input placeholder="Введите адрес клиента" />
              </Form.Field>
              <Form.Field>
                <label>Телефон:</label>
                <input placeholder="Введите телефон клиента" />
              </Form.Field>
            </Form>
          </Modal.Content>

          <Modal.Actions>
            <Button onClick={this.handleClose}>
              <Icon name="remove" /> Отменить
            </Button>
            <Button positive onClick={this.close}>
              <Icon name="checkmark" /> Сохранить
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    customers: store.customers,
    products: store.products,
    invoices: store.invoices,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    customerModalShow: (payload) => dispatch(customerModalShow(payload)),
    customerModalHide: (payload) => dispatch(customerModalHide(payload)),
    // actCancelNewInvoices: payload => dispatch(actCancelNewInvoices(payload)),
    // actChangeInputValue: payload => dispatch(actChangeInputValue(payload)),
    // fetchPutInvoices: payload => dispatch(fetchPutInvoices(payload)),
    // fetchPutInvoiceDetails: payload => dispatch(fetchPutInvoiceDetails(payload)),
    // fetchEditInvoices: payload => dispatch(fetchEditInvoices(payload)),
    // fetchEditInvoiceDetails: payload => dispatch(fetchEditInvoiceDetails(payload)),
    // fetchDeleteInvoiceDetails: payload => dispatch(fetchDeleteInvoiceDetails(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewCustomer);

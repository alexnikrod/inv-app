import React from "react";
import { connect } from "react-redux";
import { Button, Modal, Icon, Form } from "semantic-ui-react";

import {
  invoiceModalShow,
  invoiceModalHide,
} from "../../redux/invoicesReducer";

class AddNewInvoice extends React.Component {
  state = {
    modalOpen: false,
    invoiceId: "",
    customer: "",
    product: "",
    days: "",
    deposit: "",
    payment: "",
    total: "",
  };

  handleOpen = () => {
    this.props.invoiceModalShow();
    this.setState({ modalOpen: true });
  };

  handleClose = () => {
    this.setState({
      invoiceId: "",
      customer: "",
      product: "",
      days: "",
      deposit: "",
      payment: "",
      total: "",
    });
    this.props.invoiceModalHide();
    this.setState({ modalOpen: false });
  };

  render() {
    const { customers } = this.props.customers;
    const { products } = this.props.products;

    let optionsCustomers = customers.map((customer) => {
      const options = {
        key: customer.id,
        text: customer.name,
        value: customer.name,
      };
      return options;
    });

    let optionsProducts = products.map((product) => {
      const options = {
        key: product.id,
        text: product.name,
        value: product.name,
      };
      return options;
    });

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
              <Icon name="file" /> Создать заказ
            </Button>
          }
          open={this.state.modalOpen}
          onClose={this.handleClose}
        >
          <Modal.Header>
            Добавить новый заказ
            <Button
              primary
              floated="right"
              onClick={this.close}
              disabled={this.state.customer === "" || this.state.product === ""}
            >
              <Icon name="print" />
              Печатать
            </Button>
          </Modal.Header>

          <Modal.Content>
            <Form>
              <Form.Select
                fluid
                label="Клиент:"
                options={optionsCustomers}
                placeholder="Выбрать клиента"
                onChange={(e, { value }) => this.setState({ customer: value })}
              />
              <Form.Select
                fluid
                label="Инструмент:"
                options={optionsProducts}
                placeholder="Выбрать инструмент"
                onChange={(e, { value }) => this.setState({ product: value })}
              />
              <Form.Field>
                <label>Количество дней:</label>
                <Form.Input
                  placeholder="Количество дней"
                  width={5}
                  onChange={(e, { value }) => this.setState({ days: value })}
                />
              </Form.Field>
            </Form>
          </Modal.Content>

          <Modal.Actions>
            <Button onClick={this.handleClose}>
              <Icon name="remove" /> Отменить
            </Button>
            <Button
              positive
              onClick={this.close}
              disabled={this.state.customer === "" || this.state.product === ""}
            >
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
    invoiceModalShow: (payload) => dispatch(invoiceModalShow(payload)),
    invoiceModalHide: (payload) => dispatch(invoiceModalHide(payload)),
    // actCancelNewInvoices: payload => dispatch(actCancelNewInvoices(payload)),
    // actChangeInputValue: payload => dispatch(actChangeInputValue(payload)),
    // fetchPutInvoices: payload => dispatch(fetchPutInvoices(payload)),
    // fetchPutInvoiceDetails: payload => dispatch(fetchPutInvoiceDetails(payload)),
    // fetchEditInvoices: payload => dispatch(fetchEditInvoices(payload)),
    // fetchEditInvoiceDetails: payload => dispatch(fetchEditInvoiceDetails(payload)),
    // fetchDeleteInvoiceDetails: payload => dispatch(fetchDeleteInvoiceDetails(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewInvoice);

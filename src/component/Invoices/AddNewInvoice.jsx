import React from "react";
import { connect } from "react-redux";
import { Button, Modal, Icon, Form } from "semantic-ui-react";

import {
  invoiceModalShow,
  invoiceModalHide,
  fetchPutInvoices
} from "../../redux/invoicesReducer";

class AddNewInvoice extends React.Component {
  state = {
    modalOpen: false,
    id: "",
    customer: "",
    product: "",
    days: "",
    deposit: "",
    payment: "",
    total: "",
  };

  handleOpenModal = () => {
    this.props.invoiceModalShow();
    this.setState({ modalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({
      id: "",
      customer: "",
      product: "",
      days: "",
      deposit: "",
      payment: "",
      total: "",
    });
    this.setState({ modalOpen: false });
    this.props.invoiceModalHide();
  };

  handleOnChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  addNewInvoice = (event) => {
    event.preventDefault(event);
    const { id, customer, product, days } = this.state;
    const { products } = this.props.products;
    const currentProduct = products.find((item) => item.name === product);
    const newInvoice = {
      id: id,
      customer,
      product,
      days,
      deposit: currentProduct.deposit,
      payment: currentProduct.payment,
      total: currentProduct.payment * days,
    };
    this.props.fetchPutInvoices(newInvoice);
    this.handleCloseModal();
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
          dimmer={"inverted"}
          trigger={
            <Button
              color="teal"
              labelPosition="left"
              floated="left"
              icon
              size="small"
              onClick={this.handleOpenModal}
            >
              <Icon name="file" /> Создать заказ
            </Button>
          }
          open={this.state.modalOpen}
          onClose={this.handleCloseModal}
        >
          <Modal.Header>
            Добавить новый заказ
            <Button
              primary
              floated="right"
              onClick={this.close}
              disabled={
                this.state.customer === "" ||
                this.state.product === "" ||
                this.state.days === ""
              }
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
            <Button onClick={this.handleCloseModal}>
              <Icon name="remove" /> Отменить
            </Button>
            <Button
              positive
              onClick={this.addNewInvoice}
              disabled={
                this.state.customer === "" ||
                this.state.product === "" ||
                this.state.days === ""
              }
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
    invoices: store.invoices,
    customers: store.customers,
    products: store.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    invoiceModalShow: (payload) => dispatch(invoiceModalShow(payload)),
    invoiceModalHide: (payload) => dispatch(invoiceModalHide(payload)),
    fetchPutInvoices: payload => dispatch(fetchPutInvoices(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewInvoice);

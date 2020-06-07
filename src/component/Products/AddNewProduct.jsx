import React from "react";
import { connect } from "react-redux";
import { Button, Modal, Icon, Form } from "semantic-ui-react";

import {
  actProductModalShow,
  actProductModalHide,
} from "../../redux/productsReducer";

class AddNewCustomer extends React.Component {
  state = { modalOpen: false };

  handleOpen = () => {
    this.props.actProductModalShow();
    this.setState({ modalOpen: true });
  };

  handleClose = () => {
    this.props.actProductModalHide();
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
              <Icon name="wrench" /> Добавить инструмент
            </Button>
          }
          open={this.state.modalOpen}
          onClose={this.handleClose}
        >
          <Modal.Header>Добавить новый инструмент</Modal.Header>

          <Modal.Content>
          <Form>
              <Form.Field>
                <label>Название инструмента:</label>
                <input placeholder="Введите название инструмента" />
              </Form.Field>
              <Form.Field>
                <label>Цена инструмента:</label>
                <input placeholder="Введите цену инструмента" />
              </Form.Field>
              <Form.Field>
                <label>Залог:</label>
                <input placeholder="Введите залог за инструмент" />
              </Form.Field>
              <Form.Field>
                <label>Оплата за сутки:</label>
                <input placeholder="Введите оплату за сутки" />
              </Form.Field>
              <Form.Field>
                <label>Категория инструмента:</label>
                <input placeholder="Введите категорию инструмента" />
              </Form.Field>
              <Form.Field>
                <label>Описание инструмента:</label>
                <input placeholder="Введите описание инструмента" />
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
    actProductModalShow: (payload) => dispatch(actProductModalShow(payload)),
    actProductModalHide: (payload) => dispatch(actProductModalHide(payload)),
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

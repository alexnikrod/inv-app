import React from "react";
import { connect } from "react-redux";
import { Button, Modal, Icon, Form } from "semantic-ui-react";

import {
  customerModalShow,
  customerModalHide,
  fetchPutCustomers,
} from "../../redux/customersReducer";

class AddNewCustomer extends React.Component {
  state = {
    modalOpen: false,
    id: "",
    customerName: "",
    customerPass: "",
    customerAddress: "",
    customerPhone: "",
  };

  handleOpenModal = () => {
    this.props.customerModalShow();
    this.setState({ modalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({
      modalOpen: false,
      id: "",
      customerName: "",
      customerPass: "",
      customerAddress: "",
      customerPhone: "",
    });
    this.props.customerModalHide();
  };

  handleOnChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  addNewCustomer = (event) => {
    event.preventDefault(event);
    const {
      id,
      customerName,
      customerPass,
      customerAddress,
      customerPhone,
    } = this.state;
    const newCustomer = {
      id: id,
      name: customerName,
      pass: customerPass,
      address: customerAddress,
      phone: customerPhone,
    };
    this.props.fetchPutCustomers(newCustomer);
    this.handleCloseModal();
  };

  render() {
  const {customers} = this.props.customers;

  console.log(customers)

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
              onClick={this.handleOpenModal}
            >
              <Icon name="user" /> Новый клиент
            </Button>
          }
          open={this.state.modalOpen}
          onClose={this.handleCloseModal}
        >
          <Modal.Header>Добавить нового клиента</Modal.Header>

          <Modal.Content>
            <Form>
              <Form.Field>
                <label>ФИО:</label>
                <input
                  name="customerName"
                  // value={customerToEdit.name !== "" ? customerToEdit.name : null}
                  placeholder="Введите ФИО клиента"
                  onChange={this.handleOnChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Паспорт:</label>
                <input
                  placeholder="Введите номер паспорта клиента"
                  onChange={({ target: { value } }) =>
                    this.setState({ customerPass: value })
                  }
                />
              </Form.Field>
              <Form.Field>
                <label>Адрес:</label>
                <input
                  placeholder="Введите адрес клиента"
                  onChange={({ target: { value } }) =>
                    this.setState({ customerAddress: value })
                  }
                />
              </Form.Field>
              <Form.Field>
                <label>Телефон:</label>
                <input
                  placeholder="Введите телефон клиента"
                  onChange={({ target: { value } }) =>
                    this.setState({ customerPhone: value })
                  }
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
              onClick={this.addNewCustomer}
              disabled={
                this.state.customerName === "" ||
                this.state.customerPass === "" ||
                this.state.customerAddress === "" ||
                this.state.customerPhone === ""
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

const mapStateToProps = (store, props) => {
  // if (props.match.params.id) {
  //   console.log(props.match.params.id)
  // }
  return {
    customers: store.customers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    customerModalShow: (payload) => dispatch(customerModalShow(payload)),
    customerModalHide: (payload) => dispatch(customerModalHide(payload)),
    fetchPutCustomers: (payload) => dispatch(fetchPutCustomers(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewCustomer);

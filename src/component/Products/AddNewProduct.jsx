import React from "react";
import { connect } from "react-redux";
import { Button, Modal, Icon, Form } from "semantic-ui-react";

import {
  productModalShow,
  productModalHide,
  fetchPutProducts,
} from "../../redux/productsReducer";

class AddNewCustomer extends React.Component {
  state = {
    modalOpen: false,
    id: "",
    productName: "",
    productPrice: "",
    productDeposit: "",
    productPayment: "",
    productCategory: "",
    productDescription: "",
  };

  handleOpenModal = () => {
    this.props.productModalShow();
    this.setState({ modalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({
      modalOpen: false,
      id: "",
      productName: "",
      productPrice: "",
      productDeposit: "",
      productPayment: "",
      productCategory: "",
      productDescription: "",
    });
    this.props.productModalHide();
  };

  handleOnChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  addNewProduct = (event) => {
    event.preventDefault(event);
    const {
      id,
      productName,
      productPrice,
      productDeposit,
      productPayment,
      productCategory,
      productDescription,
    } = this.state;
    const newProduct = {
      id: id,
      name: productName,
      price: productPrice,
      deposit: productDeposit,
      payment: productPayment,
      category: productCategory,
      description: productDescription,
    };
    this.props.fetchPutProducts(newProduct);
    this.handleCloseModal();
  };

  render() {
    return (
      <div>
        <Modal
          // dimmer={"blurring"}
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
              <Icon name="wrench" />
              Добавить инструмент
            </Button>
          }
          open={this.state.modalOpen}
          onClose={this.handleCloseModal}
        >
          <Modal.Header>Добавить новый инструмент</Modal.Header>

          <Modal.Content>
            <Form>
              <Form.Field>
                <label>Название инструмента:</label>
                <input
                  placeholder="Введите название инструмента"
                  name="productName"
                  onChange={this.handleOnChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Цена инструмента:</label>
                <input placeholder="Введите цену инструмента" 
                name="productPrice"
                onChange={this.handleOnChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Залог:</label>
                <input placeholder="Введите залог за инструмент" 
                name="productDeposit"
                onChange={this.handleOnChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Оплата за сутки:</label>
                <input placeholder="Введите оплату за сутки" 
                name="productPayment"
                onChange={this.handleOnChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Категория инструмента:</label>
                <input placeholder="Введите категорию инструмента" 
                name="productCategory"
                onChange={this.handleOnChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Описание инструмента:</label>
                <input placeholder="Введите описание инструмента" 
                name="productDescription"
                onChange={this.handleOnChange}
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
              onClick={this.addNewProduct}
              disabled={
                this.state.productName === "" ||
                this.state.productPrice === "" ||
                this.state.productDeposit === "" ||
                this.state.productPayment === "" ||
                this.state.productCategory === "" ||
                this.state.productDescription === ""
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
    products: store.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    productModalShow: (payload) => dispatch(productModalShow(payload)),
    productModalHide: (payload) => dispatch(productModalHide(payload)),
    fetchPutProducts: (payload) => dispatch(fetchPutProducts(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewCustomer);

import React from "react";
import { Button, Modal, Icon, Form } from "semantic-ui-react";
import { useState } from "react";

const NewInvoice = ({ open, close, addNew, customers, products }) => {
  const [values, setValues] = useState({});

  const handleOnChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const addNewInvoice = (event) => {
    event.preventDefault(event);
    const currentProduct = products.find((item) => item.name === values.product);
    const newInvoice = {
      ...values,
      deposit: currentProduct.deposit,
      payment: currentProduct.payment,
      total: currentProduct.payment * values.days,
    }
    addNew(newInvoice);
    close();
    setValues({});
  };

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
      <Modal open={open} dimmer="inverted" onClose={close}>
        <Modal.Header>
          Создать новый заказ
          <Button
            primary
            floated="right"
            onClick={() => console.log("print me")}
            disabled={Object.keys(values).length !== 3}
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
              name="customer"
              options={optionsCustomers}
              placeholder="Выбрать клиента"
              onChange={(e, { value }) => setValues({ ...values, customer: value })}
            />
            <Form.Select
              fluid
              label="Инструмент:"
              name="product"
              options={optionsProducts}
              placeholder="Выбрать инструмент"
              onChange={(e, { value }) => setValues({ ...values, product: value })}
            />
            <Form.Field>
              <label>Количество дней:</label>
              <Form.Input
                name="days"
                placeholder="Количество дней"
                width={5}
                onChange={handleOnChange}
              />
            </Form.Field>
          </Form>
        </Modal.Content>

        <Modal.Actions>
          <Button onClick={close}>
            <Icon name="remove" /> Отменить
          </Button>
          <Button
            positive
            onClick={addNewInvoice}
            disabled={Object.keys(values).length !== 3}
          >
            <Icon name="checkmark" /> Сохранить
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default NewInvoice;

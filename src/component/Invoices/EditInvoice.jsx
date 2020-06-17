import React from "react";
import { Button, Modal, Icon, Form } from "semantic-ui-react";
import { useState } from "react";
import { useEffect } from "react";

const EditInvoice = ({
  open,
  close,
  addNew,
  customers,
  products,
  currentInvoice,
  update,
}) => {
  const [values, setValues] = useState(currentInvoice);

  useEffect(() => {
    setValues(currentInvoice);
  }, [currentInvoice]);

  const handleOnChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const updateInvoice = (values) => (event) => {
    event.preventDefault(event);
    const currentProduct = products.find(
      (item) => item.name === values.product
    );
    const editInvoice = {
      ...values,
      deposit: currentProduct.deposit,
      payment: currentProduct.payment,
      total: currentProduct.payment * values.days,
    };
    update(editInvoice);
    close();
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
          Редактировать заказ
          <Button
            primary
            floated="right"
            onClick={() => console.log("print me")}
            // disabled={Object.keys(values).length !== 3}
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
              value={values.customer}
              options={optionsCustomers}
              placeholder="Выбрать клиента"
              onChange={(e, { value }) =>
                setValues({ ...values, customer: value })
              }
            />
            <Form.Select
              fluid
              label="Инструмент:"
              name="product"
              value={values.product}
              options={optionsProducts}
              placeholder="Выбрать инструмент"
              onChange={(e, { value }) =>
                setValues({ ...values, product: value })
              }
            />
            <Form.Field>
              <label>Количество дней:</label>
              <Form.Input
                name="days"
                value={values.days}
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
          <Button positive onClick={updateInvoice(values)}>
            <Icon name="checkmark" /> Сохранить
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default EditInvoice;

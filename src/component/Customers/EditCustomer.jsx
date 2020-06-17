import React from "react";
import { Button, Modal, Icon, Form } from "semantic-ui-react";
import { useState, useEffect } from "react";

const EditCustomer = ({ open, close, currentCustomer, update }) => {
  const [customer, setCustomer] = useState(currentCustomer);

  useEffect(() => {
    setCustomer(currentCustomer);
  }, [currentCustomer]);

  const handleOnChange = ({ target: { value, name } }) => {
    setCustomer({ ...customer, [name]: value });
  };

  const updateCustomer = (updatedCustomer) => (event) => {
    event.preventDefault(event);
    update(updatedCustomer);
    close();
  };

  return (
    <div>
      <Modal open={open} dimmer="inverted" onClose={close}>
        <Modal.Header>Редактировать клиента</Modal.Header>

        <Modal.Content>
          <Form>
            <Form.Field>
              <label>ФИО:</label>
              <input
                name="name"
                value={customer.name}
                placeholder="Введите ФИО клиента"
                onChange={handleOnChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Паспорт:</label>
              <input
                name="pass"
                value={customer.pass}
                placeholder="Введите номер паспорта клиента"
                onChange={handleOnChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Адрес:</label>
              <input
                name="address"
                value={customer.address}
                placeholder="Введите адрес клиента"
                onChange={handleOnChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Телефон:</label>
              <input
                name="phone"
                value={customer.phone}
                placeholder="Введите телефон клиента"
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
            onClick={updateCustomer(customer)}
            disabled={Object.keys(customer).length !== 5}
          >
            <Icon name="checkmark" /> Сохранить
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default EditCustomer;

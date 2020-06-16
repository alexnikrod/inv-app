import React from "react";
import { Button, Modal, Icon, Form } from "semantic-ui-react";
import { useState } from "react";

const NewCustomer = ({ open, close, addNew }) => {
  const [values, setValues] = useState({});
  
  const handleOnChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const addNewCustomer = (event) => {
    event.preventDefault(event);
    addNew(values);
    close();
    setValues({})
  };

  return (
    <div>
      <Modal open={open} dimmer="inverted" onClose={close}>
        <Modal.Header>Добавить нового клиента</Modal.Header>

        <Modal.Content>
          <Form>
            <Form.Field>
              <label>ФИО:</label>
              <input
                name="name"
                placeholder="Введите ФИО клиента"
                onChange={handleOnChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Паспорт:</label>
              <input
                name="pass"
                placeholder="Введите номер паспорта клиента"
                onChange={handleOnChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Адрес:</label>
              <input
                name="address"
                placeholder="Введите адрес клиента"
                onChange={handleOnChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Телефон:</label>
              <input
                name="phone"
                // value="value"
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
            onClick={addNewCustomer}
            disabled={Object.keys(values).length !== 4}
          >
            <Icon name="checkmark" /> Сохранить
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default NewCustomer;

import React from "react";
import { Button, Modal, Icon, Form } from "semantic-ui-react";

const EditCustomer = ({ open, close }) => {
  return (
    <div>
      <Modal open={open} dimmer="inverted" onClose={close}>
        <Modal.Header>EDIT Customer</Modal.Header>

        <Modal.Content>
          <Form>
            <Form.Field>
              <label>ФИО:</label>
              <input
                name="name"
                // value={customer.name}
                placeholder="Введите ФИО клиента"
                onChange={"handleOnChange"}
              />
            </Form.Field>
            <Form.Field>
              <label>Паспорт:</label>
              <input
                name="pass"
                placeholder="Введите номер паспорта клиента"
                onChange={"handleOnChange"}
              />
            </Form.Field>
            <Form.Field>
              <label>Адрес:</label>
              <input
                name="address"
                placeholder="Введите адрес клиента"
                onChange={"handleOnChange"}
              />
            </Form.Field>
            <Form.Field>
              <label>Телефон:</label>
              <input
                name="phone"
                // value="value"
                placeholder="Введите телефон клиента"
                onChange={"handleOnChange"}
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
            onClick={"edit"}
            // disabled={Object.keys(newCustomer).length !== 4}
          >
            <Icon name="checkmark" /> Сохранить
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default EditCustomer;

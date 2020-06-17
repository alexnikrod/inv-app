import React from "react";
import { Button, Modal, Icon, Form } from "semantic-ui-react";
import { useState } from "react";

const NewProduct = ({ open, close, addNew }) => {
  const [values, setValues] = useState({});

  const handleOnChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const addNewProduct = (event) => {
    event.preventDefault(event);
    addNew(values);
    close();
    setValues({});
  };

  return (
    <div>
      <Modal open={open} dimmer="inverted" onClose={close}>
        <Modal.Header>Добавить новый инструмент</Modal.Header>

        <Modal.Content>
          <Form>
            <Form.Field>
              <label>Название инструмента:</label>
              <input
                placeholder="Введите название инструмента"
                name="name"
                onChange={handleOnChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Цена инструмента:</label>
              <input
                placeholder="Введите цену инструмента"
                name="price"
                onChange={handleOnChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Залог:</label>
              <input
                placeholder="Введите залог за инструмент"
                name="deposit"
                onChange={handleOnChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Оплата за сутки:</label>
              <input
                placeholder="Введите оплату за сутки"
                name="payment"
                onChange={handleOnChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Категория инструмента:</label>
              <input
                placeholder="Введите категорию инструмента"
                name="category"
                onChange={handleOnChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Описание инструмента:</label>
              <input
                placeholder="Введите описание инструмента"
                name="description"
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
            onClick={addNewProduct}
            disabled={Object.keys(values).length !== 6}
          >
            <Icon name="checkmark" /> Сохранить
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default NewProduct;

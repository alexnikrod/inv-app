import React from "react";
import { Button, Modal, Icon, Form } from "semantic-ui-react";
import { useState, useEffect } from "react";

const EditProduct = ({ open, close, currentProduct, update }) => {
  const [product, setProduct] = useState(currentProduct);

  useEffect(() => {
    setProduct(currentProduct);
  }, [currentProduct]);

  const handleOnChange = ({ target: { value, name } }) => {
    setProduct({ ...product, [name]: value });
  };

  const updateProduct = (updatedProduct) => (event) => {
    event.preventDefault(event);
    update(updatedProduct);
    close();
  };

  return (
    <div>
      <Modal open={open} dimmer="inverted" onClose={close}>
        <Modal.Header>Редактировать инструмент</Modal.Header>

        <Modal.Content>
          <Form>
            <Form.Field>
              <label>Название инструмента:</label>
              <input
                placeholder="Введите название инструмента"
                name="name"
                value={product.name}
                onChange={handleOnChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Цена инструмента:</label>
              <input
                placeholder="Введите цену инструмента"
                name="price"
                value={product.price}
                onChange={handleOnChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Залог:</label>
              <input
                placeholder="Введите залог за инструмент"
                name="deposit"
                value={product.deposit}
                onChange={handleOnChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Оплата за сутки:</label>
              <input
                placeholder="Введите оплату за сутки"
                name="payment"
                value={product.payment}
                onChange={handleOnChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Категория инструмента:</label>
              <input
                placeholder="Введите категорию инструмента"
                name="category"
                value={product.category}
                onChange={handleOnChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Описание инструмента:</label>
              <input
                placeholder="Введите описание инструмента"
                name="description"
                value={product.description}
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
            onClick={updateProduct(product)}
            disabled={Object.keys(product).length !== 7}
          >
            <Icon name="checkmark" /> Сохранить
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default EditProduct;

import React, { useState } from "react";
import { Table, Button, Icon, Segment, Header, Checkbox } from "semantic-ui-react";

import NewProduct from "./NewProduct";
import EditProduct from "./EditProduct";

const Products = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const { products } = props.products;

  const onEdit = (product) => (event) => {
    event.preventDefault(event);
    setIsEdit(true);
    setCurrentProduct({
      id: product.id,
      name: product.name,
      price: product.price,
      deposit: product.deposit,
      payment: product.payment,
      category: product.category,
      description: product.description,
    });
  };

  return (
    <Segment>
      <Segment clearing>
        <Header as="h3">
          Инструменты
          <Header size="tiny" floated="right">
            Всего: {products.length}
          </Header>
        </Header>
      </Segment>

      <div>
        <Button
          positive
          labelPosition="left"
          icon
          onClick={() => setShowModal(true)}
        >
          <Icon name="wrench" />
          Добавить инструмент
        </Button>
        <Checkbox 
        toggle 
        label="в наличии" 
        className="toggle-btn"
        />
      </div>
      <NewProduct
        open={showModal}
        close={() => setShowModal(false)}
        addNew={props.addNew}
      />
      
      <Table striped>
        <Table.Header>
          <Table.Row textAlign="center">
            <Table.HeaderCell width="1">#</Table.HeaderCell>
            <Table.HeaderCell width="4">Наименование</Table.HeaderCell>
            <Table.HeaderCell>Цена</Table.HeaderCell>
            <Table.HeaderCell>Залог</Table.HeaderCell>
            <Table.HeaderCell>За сутки</Table.HeaderCell>
            <Table.HeaderCell>Категория</Table.HeaderCell>
            <Table.HeaderCell>Описание</Table.HeaderCell>
            <Table.HeaderCell width="3">Действия</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products.map((item) => (
            <Table.Row textAlign="center" key={item.id}>
              <Table.Cell verticalAlign="middle">{item.id}</Table.Cell>
              <Table.Cell verticalAlign="middle">{item.name}</Table.Cell>
              <Table.Cell verticalAlign="middle">{item.price}</Table.Cell>
              <Table.Cell verticalAlign="middle">{item.deposit}</Table.Cell>
              <Table.Cell verticalAlign="middle">{item.payment}</Table.Cell>
              <Table.Cell verticalAlign="middle">{item.category}</Table.Cell>
              <Table.Cell verticalAlign="middle">{item.description}</Table.Cell>
              <Table.Cell verticalAlign="middle">
                <Button
                  icon
                  color="orange"
                  onClick={onEdit(item)}
                  title="редактировать"
                >
                  <Icon name="edit" />
                </Button>
                <Button
                  icon
                  negative
                  onClick={props.onDelete(item.id)}
                  title="удалить"
                >
                  <Icon name="x" />
                </Button>
                <EditProduct
                  open={isEdit}
                  close={() => setIsEdit(false)}
                  currentProduct={currentProduct}
                  update={props.update}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Segment>
  );
};

export default Products;

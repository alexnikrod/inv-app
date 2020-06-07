import React from "react";
import { Table, Button, Icon, Segment, Header } from "semantic-ui-react";
import AddNewProduct from "./AddNewProduct";

const Products = (props) => {
  const { products } = props.products;

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

      <div className="add-btn">
        <AddNewProduct />
      </div>

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
            <Table.HeaderCell width="3" />
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
                <Button icon positive title="закрыть">
                  <Icon name="chevron down" />
                </Button>
                <Button icon color="orange" title="редактировать">
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
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Segment>
  );
};

export default Products;

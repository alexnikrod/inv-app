import React from "react";
import { Table, Button, Icon, Segment, Header } from "semantic-ui-react";

const History = (props) => {
  const { invoices } = props.invoices;

  return (
    <Segment>
      <Segment clearing>
        <Header as="h3">
          История заказов
          <Header size="tiny" floated="right">
            Всего: {invoices.length}
          </Header>
        </Header>
      </Segment>

      <Table striped>
        <Table.Header>
          <Table.Row textAlign="center">
            <Table.HeaderCell width="1">#</Table.HeaderCell>
            <Table.HeaderCell>Клиент</Table.HeaderCell>
            <Table.HeaderCell>Инструмент</Table.HeaderCell>
            <Table.HeaderCell width="1">Залог</Table.HeaderCell>
            <Table.HeaderCell width="1">Дней</Table.HeaderCell>
            <Table.HeaderCell width="1">Стоимость</Table.HeaderCell>
            <Table.HeaderCell width="1">Итого</Table.HeaderCell>
            <Table.HeaderCell width="3" />
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {invoices.map((item) => (
            <Table.Row textAlign="center" key={item.id}>
              <Table.Cell verticalAlign="middle">{item.id}</Table.Cell>
              <Table.Cell verticalAlign="middle">{item.customer}</Table.Cell>
              <Table.Cell verticalAlign="middle">{item.product}</Table.Cell>
              <Table.Cell verticalAlign="middle">{item.deposit}</Table.Cell>
              <Table.Cell verticalAlign="middle">{item.days}</Table.Cell>
              <Table.Cell verticalAlign="middle">{item.payment}</Table.Cell>
              <Table.Cell verticalAlign="middle">{item.total}</Table.Cell>
              <Table.Cell verticalAlign="middle">
                <Button icon color="orange" title="редактировать">
                  <Icon name="edit" />
                </Button>
                <Button icon negative onClick={props.onDelete(item.id)} title="удалить">
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

export default History;

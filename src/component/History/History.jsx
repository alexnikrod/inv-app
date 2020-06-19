import React, { useState } from "react";
import { Table, Button, Icon, Segment, Header } from "semantic-ui-react";
import EditHistory from "./EditHistory";

const History = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [currentRecord, setCurrentRecord] = useState({});
  
  const { history } = props.history;

  const onEdit = (history) => (event) => {
    event.preventDefault(event);
    setIsEdit(true);
    setCurrentRecord({
      id: history.id,
      customer: history.customer,
      product: history.product,
      deposit: history.deposit,
      days: history.days,
      payment: history.payment,
      total: history.total,
    });
  };

  return (
    <Segment>
      <Segment clearing>
        <Header as="h3">
          История заказов
          <Header size="tiny" floated="right">
            Всего: {history.length}
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
            <Table.HeaderCell width="3">Действия</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {history.map((item) => (
            <Table.Row textAlign="center" key={item.id}>
              <Table.Cell verticalAlign="middle">{item.id}</Table.Cell>
              <Table.Cell verticalAlign="middle">{item.customer}</Table.Cell>
              <Table.Cell verticalAlign="middle">{item.product}</Table.Cell>
              <Table.Cell verticalAlign="middle">{item.deposit}</Table.Cell>
              <Table.Cell verticalAlign="middle">{item.days}</Table.Cell>
              <Table.Cell verticalAlign="middle">{item.payment}</Table.Cell>
              <Table.Cell verticalAlign="middle">{item.total}</Table.Cell>
              <Table.Cell verticalAlign="middle">
                <Button icon color="orange" title="редактировать" onClick={onEdit(item)}>
                  <Icon name="edit" />
                </Button>
                <Button icon negative onClick={props.onDelete(item.id)} title="удалить">
                  <Icon name="x" />
                </Button>
                <EditHistory
                  open={isEdit}
                  close={() => setIsEdit(false)}
                  customers={props.customers}
                  products={props.products}
                  currentHistory={currentRecord}
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

export default History;

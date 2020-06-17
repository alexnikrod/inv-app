import React, { useState } from "react";
import { Table, Button, Icon, Segment, Header } from "semantic-ui-react";

import NewInvoice from "./NewInvoice";
import EditInvoice from "./EditInvoice";

const Invoices = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentInvoice, setCurrentInvoice] = useState({});

  const { invoices } = props.invoices;

  const onEdit = (invoice) => (event) => {
    event.preventDefault(event);
    setIsEdit(true);
    setCurrentInvoice({
      id: invoice.id,
      customer: invoice.customer,
      product: invoice.product,
      deposit: invoice.deposit,
      days: invoice.days,
      payment: invoice.payment,
      total: invoice.total,
    });
  };

  return (
    <Segment>
      <Segment clearing>
        <Header as="h3">
          Активные заказы
          <Header size="tiny" floated="right">
            Всего: {invoices.length}
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
          <Icon name="file" /> Создать заказ
        </Button>
      </div>
      <NewInvoice
        open={showModal}
        close={() => setShowModal(false)}
        addNew={props.addNew}
        customers={props.customers}
        products={props.products}
      />

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
                <Button icon positive title="закрыть">
                  <Icon name="chevron down" />
                </Button>
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
                <EditInvoice
                  open={isEdit}
                  close={() => setIsEdit(false)}
                  customers={props.customers}
                  products={props.products}
                  currentInvoice={currentInvoice}
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

export default Invoices;

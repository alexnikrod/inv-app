import React, { useState } from "react";
import { Table, Button, Icon, Segment, Header } from "semantic-ui-react";

import AddNewCustomer from "./AddNewCustomer";
import NewCustomer from "./NewCustomer";
import EditCustomer from "./EditCustomer";

const Customers = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false)

  const { customers } = props.customers;

  return (
    <Segment>
      <Segment clearing>
        <Header as="h3">
          Клиенты
          <Header size="tiny" floated="right">
            Всего: {customers.length}
          </Header>
        </Header>
      </Segment>

      <div>
        <AddNewCustomer />
        <Button
          positive
          labelPosition="left"
          icon
          onClick={() => setShowModal(true)}
        >
          <Icon name="user" />
          Новый клиент3
        </Button>
      </div>

      <Table striped>
        <Table.Header>
          <Table.Row textAlign="center">
            <Table.HeaderCell width="1">#</Table.HeaderCell>
            <Table.HeaderCell>Клиент</Table.HeaderCell>
            <Table.HeaderCell>Паспорт</Table.HeaderCell>
            <Table.HeaderCell width="3">Адрес</Table.HeaderCell>
            <Table.HeaderCell width="3">Телефон</Table.HeaderCell>
            <Table.HeaderCell width="3">Действия</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {customers.map((item) => (
            <Table.Row textAlign="center" key={item.id}>
              <Table.Cell verticalAlign="middle">{item.id}</Table.Cell>
              <Table.Cell verticalAlign="middle">{item.name}</Table.Cell>
              <Table.Cell verticalAlign="middle">{item.pass}</Table.Cell>
              <Table.Cell verticalAlign="middle">{item.address}</Table.Cell>
              <Table.Cell verticalAlign="middle">{item.phone}</Table.Cell>
              <Table.Cell verticalAlign="middle">
                <Button
                  icon
                  color="orange"
                  onClick={() => setIsEdit(true)}
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
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <EditCustomer open={isEdit} close={() => setIsEdit(false)}/>
      <NewCustomer open={showModal} close={() => setShowModal(false)} addNew={props.addNew}/>
    </Segment>
  );
};

export default Customers;

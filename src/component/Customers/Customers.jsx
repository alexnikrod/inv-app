import React from "react";
import { Table, Button, Icon, Segment, Header } from "semantic-ui-react";

const Customers = (props) => {
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

      <div className="add-btn">
        <Button
          color="teal"
          labelPosition="left"
          floated="left"
          icon
          size="small"
          // onClick={props.actCustomerModalShow}
        >
          <Icon name="user" /> Новый клиент
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
            <Table.HeaderCell width="3" />
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
                <Button icon positive>
                  <Icon name="chevron down" title="закрыть"/>
                </Button>
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

export default Customers;

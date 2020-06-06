import React, { Component } from "react";
import { Input, Menu, Segment } from "semantic-ui-react";
import logo from "../assets/img/iceberg.png";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment>
        <Menu color={"blue"} inverted>
          <Menu.Item>
            <img src={logo} alt="Iceberg" />
          </Menu.Item>
          <Menu.Item>
            <h2>Айсберг Прокат</h2>
          </Menu.Item>
          <Menu.Item
            name="orders"
            active={activeItem === "orders"}
            onClick={this.handleItemClick}
          >
            <NavLink to="/invoices">Активные заказы</NavLink>
          </Menu.Item>
          <Menu.Item
            name="customers"
            active={activeItem === "customers"}
            onClick={this.handleItemClick}
          >
            <NavLink to="/customers">Клиенты</NavLink>
          </Menu.Item>
          <Menu.Item
            name="products"
            active={activeItem === "products"}
            onClick={this.handleItemClick}
          >
            <NavLink to="/products">Инструменты</NavLink>
          </Menu.Item>
          <Menu.Item
            name="history"
            active={activeItem === "history"}
            onClick={this.handleItemClick}
          >
            <NavLink to="/history">История Заказов</NavLink>
          </Menu.Item>
          <Menu.Menu position="left">
            <Menu.Item>
              <Input icon="search" placeholder="Поиск..." />
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position="right">
            <Menu.Item
              name="login"
              active={activeItem === "login"}
              onClick={this.handleItemClick}
            >
              <NavLink to="/login">Login</NavLink>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Segment>
    );
  }
}

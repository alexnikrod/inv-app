import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

import logo from "../assets/img/iceberg.png";

export default class Login extends Component {
  render() {
    return (
      <Grid textAlign="center" verticalAlign="top">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Image src={logo} className="logo" centered />
          <Header as="h1" textAlign="center">
            Айсберг Прокат
            <Header.Subheader>Пожалуйста, войдите в систему</Header.Subheader>
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />

              <Button positive fluid size="large">
                Вход
              </Button>
            </Segment>
          </Form>
          <Message>
            Новый пользователь? <a href="#">Регистрация</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

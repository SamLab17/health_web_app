import React, { Component } from "react";
import { Image, Form, Button, Grid, Segment, Header } from "semantic-ui-react";
import ValidatedInputField from "./ValidatedInput";
import axios from "axios";

const api_base_url = "";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    emailIsValid: false,
    passwordIsValid: false
  };

  componentDidUpdate() {
    console.log(this.state.emailIsValid, this.state.passwordIsValid);
  }

  handleChange = (field, input, isValid) => {
    //console.log(field, isValid);
    if (isValid)
      this.setState({
        //If input is valid, store the new input
        [field]: input,
        [field + "IsValid"]: isValid
      });
    //Input was not valid, store that it is in a invalid state
    else this.setState({ [field + "IsValid"]: false });
  };

  handleLogin = () => {
    if (this.state.emailIsValid && this.state.passwordIsValid) {
      console.log({ email: this.state.email, password: this.state.password });
      axios
        .put(api_base_url + "/login", {
          email: this.state.eid,
          password: this.state.password
        })
        .then(response => {
          console.log(response);
        });
      let id = 12345;
      this.props.history.push("/user/" + id);
    }
  };

  render() {
    return (
      <div>
        <style>
          {`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}
        </style>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="orange" textAlign="center">
              <Image src="smalllogo.png" />
              Log-in to your account
            </Header>
            <Form>
              <Segment stacked>
                <ValidatedInputField
                  label="E-mail"
                  field="email"
                  required
                  email
                  default={this.state.email}
                  onChange={this.handleChange}
                />
                <ValidatedInputField
                  label="Password"
                  field="password"
                  required
                  type="password"
                  default={this.state.password}
                  onChange={this.handleChange}
                />
              </Segment>
              <Button
                color="orange"
                fluid
                size="large"
                onClick={this.handleLogin}
                disabled={
                  !this.state.emailIsValid || !this.state.passwordIsValid
                }
              >
                Log in
              </Button>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

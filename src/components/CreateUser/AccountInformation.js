import React, { Component } from "react";
import { Header, Grid, Form, Button, Icon } from "semantic-ui-react";
import ValidatedInputField from "../ValidatedInput";

class CreateUser extends Component {
  state = {
    //This user's personal information
    firstName: "",
    lastName: "",
    id: "",
    email: "",
    univseristy: "",
    password: "",
    firstNameValid: false,
    lastNameValid: false,
    idValid: false,
    emailValid: false,
    universityValid: false,
    passwordValid: false,
    fieldsChanged: false,
    trySubmit: false, //We are trying/tried to send new personal information to the rest API
    didSubmit: false //If true, updating personal info was successful
  };

  reportValues = () => {
    const { firstName, lastName, id, email, university, password } = this.state;
    const data = {
      firstName: [firstName],
      lastName: [lastName],
      id: [id],
      email: [email],
      univseristy: [university],
      password: [password]
    };
    this.props.onSubmit(data);
  };

  handleChange = (field, input, isValid) => {
    if (isValid)
      this.setState({
        //If input is valid, store the new input
        [field]: input,
        [field + "Valid"]: isValid,
        fieldsChanged: true
      });
    //Input was not valid, store that it is in a invalid state
    else this.setState({ [field + "Valid"]: isValid, fieldsChanged: true });
  };

  checkAllFieldsValid() {
    const {
      firstNameValid,
      lastNameValid,
      idValid,
      emailValid,
      passwordValid
    } = this.state;
    return (
      firstNameValid && lastNameValid && idValid && emailValid && passwordValid
    );
  }

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
        <Header as="h3" textAlign="center" style={{ marginBottom: "20" }}>
          Account Information
        </Header>
        <Grid style={{ paddingTop: "20" }} columns="1" centered>
          <Grid.Column style={{ maxWidth: 500 }}>
            <Form>
              <Form.Group unstackable width={"equal"} placeholder="Test text">
                <ValidatedInputField
                  label="First name"
                  field="firstName"
                  required
                  default={this.state.firstName}
                  onChange={this.handleChange}
                />
                <ValidatedInputField
                  label="Last name"
                  field="lastName"
                  default={this.state.lastName}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <ValidatedInputField
                label="UT EID"
                field="id"
                required
                default={this.state.id}
                onChange={this.handleChange}
              />
              <ValidatedInputField
                label="E-mail"
                field="email"
                required
                email
                default={this.state.email}
                onChange={this.handleChange}
              />
              <ValidatedInputField
                label="University"
                field="university"
                default={this.state.university}
                onChange={this.handleChange}
              />
              <ValidatedInputField
                label="Password"
                field="password"
                type="password"
                required
                default={this.state.password}
                onChange={this.handleChange}
              />
            </Form>
          </Grid.Column>
          <Grid.Row>
            <Button
              disabled={
                !this.checkAllFieldsValid() || !this.state.fieldsChanged
              }
              color={"orange"}
              type={"submit"}
              onClick={this.reportValues}
            >
              Next
              <Icon name="angle right" />
            </Button>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default CreateUser;

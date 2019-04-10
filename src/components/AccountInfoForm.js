import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import SubmissionMessage from "./SubmissionMessage";
import ValidatedInputField from "./ValidatedInput";

class AccountInfoForm extends Component {
  state = {
    //This user's personal information
    firstName: "Jane",
    lastName: "Doe",
    id: "0",
    email: "default@default.com",
    firstNameValid: true,
    lastNameValid: true,
    idValid: true,
    emailValid: true,
    fieldsChanged: false,
    trySubmit: false, //We are trying/tried to send new personal information to the rest API
    didSubmit: false //If true, updating personal info was successful
  };

  componentDidMount() {
    //Retrieve account information
  }

  submitInfo = () => {
    this.setState({ trySubmit: true });
    //Try Submitting to rest API

    //If Successful
    this.setState({ didSubmit: true });
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
    const { firstNameValid, lastNameValid, idValid, emailValid } = this.state;
    return firstNameValid && lastNameValid && idValid && emailValid;
  }

  render() {
    return (
      <div>
        <h3>Account Information</h3>
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
              required
              default={this.state.lastName}
              onChange={this.handleChange}
            />
          </Form.Group>
          <ValidatedInputField
            label="UT EID"
            field="id"
            required
            readOnly
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
          <Button
            disabled={!this.checkAllFieldsValid() || !this.state.fieldsChanged}
            color={"orange"}
            type={"submit"}
            onClick={this.submitInfo}
          >
            Update Account Information
          </Button>
        </Form>
        <SubmissionMessage
          visible={this.state.trySubmit && this.state.didSubmit}
          success={true}
        />
        <SubmissionMessage
          visible={this.state.trySubmit && !this.state.didSubmit}
          success={false}
        />
      </div>
    );
  }
}

export default AccountInfoForm;

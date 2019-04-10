import React, { Component } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import SubmissionMessage from "./SubmissionMessage";
import ValidatedInputField from "./ValidatedInput";

class AccountInfoForm extends Component {
  state = {
    personal_info: {
      //This user's personal information
      firstName: "Jane",
      lastName: "Doe",
      id: "0",
      email: "default@default.com"
    },
    fieldIsValid: {
      firstName: true,
      lastName: true,
      id: true,
      email: true
    },
    fieldsChanged: false,
    allFieldsValid: true,
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

  //This is broken, setting state does not work
  handleChange = (field, input, isValid) => {
    this.setState({ fieldIsValid: { field: isValid }, fieldsChanged: true });
    console.log(this.state.fieldIsValid);
    if (isValid) this.setState({ personal_info: { [field]: input } });
    console.log(field, input, isValid);
    this.checkAllFieldsValid();
    console.log(this.state.fieldsChanged, this.state.allFieldsValid);
  };

  checkAllFieldsValid() {
    const { firstName, lastName, id, email } = this.state.fieldIsValid;
    console.log(firstName, lastName, id, email);
    this.setState({ allFieldsValid: firstName && lastName && id && email });
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
              default={this.state.personal_info.firstName}
              onChange={this.handleChange}
            />
            <ValidatedInputField
              label="Last name"
              field="lastName"
              required
              default={this.state.personal_info.lastName}
              onChange={this.handleChange}
            />
          </Form.Group>
          <ValidatedInputField
            label="UT EID"
            field="id"
            required
            readOnly
            default={this.state.personal_info.id}
            onChange={this.handleChange}
          />
          <ValidatedInputField
            label="E-mail"
            field="email"
            required
            email
            default={this.state.personal_info.email}
            onChange={this.handleChange}
          />
          <Button
            disabled={!this.state.allFieldsValid || !this.state.fieldsChanged}
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

import React, { Component } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import SubmissionMessage from "./SubmissionMessage";

class AccountInfoForm extends Component {
  state = {
    personal_info: {
      //This user's personal information
      firstName: "First Name",
      lastName: "Last Name",
      id: "0",
      email: "default@default.com"
    },
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
  render() {
    return (
      <div>
        <h3>Account Information</h3>
        <Form>
          <Form.Group unstackable width={"equal"}>
            <Form.Field required>
              <label>First name</label>
              <Input placeholder={this.state.firstName} />
            </Form.Field>
            <Form.Field>
              <label>Last name</label>
              <Input placeholder={this.state.lastName} />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label>UT EID</label>
            <Input readOnly placeholder={this.state.id} />
          </Form.Field>
          <Form.Field>
            <label>E-mail</label>
            <Input placeholder={this.state.email} />
          </Form.Field>
          <Button color={"orange"} type={"submit"} onClick={this.submitInfo}>
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

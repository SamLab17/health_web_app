import React, { Component } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import SubmissionMessage from "./SubmissionMessage";

class PersonalInfoForm extends Component {
  state = {
    personal_info: {
      height: -1,
      weight: -1,
      gender: "male"
    },
    trySubmit: false,
    didSubmit: false
  };

  componentDidMount() {
    //Try to get user's Personal Information
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
        <h3>Personal Information</h3>
        <Form>
          <Form.Group width={"equal"}>
            <Form.Field required>
              <label>Height (inches)</label>
              <Input />
            </Form.Field>
            <Form.Field required>
              <label>Weight (pounds)</label>
              <Input />
            </Form.Field>
          </Form.Group>
          <Form.Group inline>
            <label>Gender: </label>
            <Form.Field
              label="Male"
              control="input"
              type="radio"
              name="genderRadios"
            />
            <Form.Field
              label="Female"
              control="input"
              type="radio"
              name="genderRadios"
            />
          </Form.Group>
          <Button color={"orange"} type={"submit"} onClick={this.submitInfo}>
            Update Personal Information
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

export default PersonalInfoForm;

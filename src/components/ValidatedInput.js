import React, { Component } from "react";
import { Input, Form } from "semantic-ui-react";

/*
Props:
required: boolean
email: boolean
number: boolean
readOnly: boolean
label: string
placeholder: string
onChange: function

*/

class ValidatedInput extends Component {
  state = {
    isValid: true,
    changed: false,
    currentInput: "" //May not be necessary
  };

  handleChange = (event, data) => {
    this.setState({ changed: true, currentInput: data.value });
    let isValid = this.validate(data.value);
    this.props.onChange(this.props.field, data.value, isValid);
  };

  validate(input) {
    let isValid = true;
    if (this.props.required && input === "") isValid = false;
    if (this.props.email && isValid) isValid = this.checkEmail(input);
    if (this.props.number) isValid = this.checkNumber(input);
    this.setState({ isValid: isValid });
    return isValid;
  }

  checkNumber(num) {
    const re = /^[0-9]+$/;
    return re.test(num);
  }

  checkEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  render() {
    return (
      <Form.Field
        disabled={this.props.readOnly}
        required={this.props.required}
        error={!this.state.isValid && this.state.changed}
      >
        <label>{this.props.label}</label>
        <Input
          onChange={this.handleChange}
          defaultValue={this.props.default}
          type={this.props.type}
        />
      </Form.Field>
    );
  }
}

export default ValidatedInput;

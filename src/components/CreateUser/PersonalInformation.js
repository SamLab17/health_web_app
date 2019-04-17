import React, { Component } from "react";
import { Header, Grid, Form, Button, Icon } from "semantic-ui-react";
import ValidatedInputField from "../ValidatedInput";

const minHeight = 20;
const maxHeight = 100;
const minWeight = 50;
const minAge = 18;

export default class PersonalInformation extends Component {
  state = {
    height: 0,
    weight: 0,
    age: 0,
    heightValid: false,
    weightValid: false,
    ageValid: false,
    fieldsChanged: false
  };

  handleChange = (field, input, isValid) => {
    if (isValid) {
      let validCheck = true;
      if (field === "height")
        validCheck = input > minHeight && input < maxHeight;
      else if (field === "weight") validCheck = input > minWeight;
      else validCheck = input > minAge;
      if (validCheck) {
        this.setState({
          [field]: input,
          [field + "Valid"]: true,
          fieldsChanged: true
        });
      }
    }
    this.setState({ [field + "Valid"]: false, fieldsChanged: true });
  };

  checkAllFieldsValid() {
    const { heightValid, weightValid, ageValid } = this.state;
    return heightValid && weightValid && ageValid;
  }

  reportValues = () => {
    const { height, weight, age } = this.state;
    const data = {
      height: [height],
      weight: [weight],
      age: [age]
    };
    this.props.onSubmit(data);
  };

  reportSkip = () => {
    this.props.onSubmit(null);
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
        <Header as="h2" textAlign="center" style={{ marginBottom: "20" }}>
          Personal Information
        </Header>
        <Grid style={{ paddingTop: "20" }} columns="1" centered>
          <Grid.Column style={{ maxWidth: 500 }}>
            <Form>
              <ValidatedInputField
                label="Height (inches)"
                field="height"
                required
                number
                onChange={this.handleChange}
              />
              <ValidatedInputField
                label="Weight (pounds)"
                field="weight"
                required
                number
                onChange={this.handleChange}
              />
              <ValidatedInputField
                label="Age (years)"
                field="age"
                required
                number
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
              Add Information
            </Button>
            <Button
              basic
              color={"orange"}
              type={"submit"}
              onClick={this.reportSkip}
            >
              Skip
            </Button>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

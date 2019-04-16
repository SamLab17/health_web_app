import React, { Component } from "react";
import { Form, Radio, Button } from "semantic-ui-react";
import SubmissionMessage from "./SubmissionMessage";
import ValidatedInput from "./ValidatedInput";

class PersonalInfoForm extends Component {
  state = {
    height: 70,
    weight: 180,
    gender: "male",
    heightValid: true,
    weightValid: true,
    fieldsChanged: false,
    trySubmit: false,
    didSubmit: false
  };

  componentDidMount() {
    //Try to get user's Personal Information
  }

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
    const { heightValid, weightValid } = this.state;
    return heightValid && weightValid;
  }

  handleRadioChange = (event, data) => {
    this.setState({ fieldsChanged: true, gender: data.value });
  };

  submitPreferences = () => {
    this.setState({ fieldsChanged: false, trySubmit: true, didSubmit: true });

    if (this.checkAllFieldsValid()) {
      //Try Submitting to rest API
    }

    //If Successful
    //this.setState({ didSubmit: true });
  };

  render() {
    return (
      <div>
        <h3>Personal Information</h3>
        <Form>
          <Form.Group width={"equal"}>
            <ValidatedInput
              label="Height (inches)"
              field="height"
              required
              number
              default={this.state.height}
              onChange={this.handleChange}
            />
            <ValidatedInput
              label="Weight (pounds)"
              field="weight"
              requried
              number
              default={this.state.weight}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group inline>
            <label>Gender: </label>
            <Form.Field>
              <Radio
                label="Male"
                name="gender"
                value="male"
                checked={this.state.gender === "male"}
                onChange={this.handleRadioChange}
              />
                        </Form.Field>
                        <Form.Field>

            <Radio
              label="Female"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleRadioChange}
            />
                        </Form.Field>
            <Form.Field>

            <Radio
              label="Other"
              name="gender"
              value="other"
              checked={this.state.gender === "other"}
              onChange={this.handleRadioChange}
            />
                        </Form.Field>

          </Form.Group>
          <Button
            disabled={!this.checkAllFieldsValid() || !this.state.fieldsChanged}
            color={"orange"}
            type={"submit"}
            onClick={this.submitPreferences}
          >
            Update Personal Information
          </Button>
        </Form>
        <SubmissionMessage
          visible={
            !this.state.fieldsChanged &&
            this.state.trySubmit &&
            this.state.didSubmit
          }
          success={true}
        />
        <SubmissionMessage
          visible={
            !this.state.fieldsChanged &&
            this.state.trySubmit &&
            !this.state.didSubmit
          }
          success={false}
        />
      </div>
    );
  }
}

export default PersonalInfoForm;

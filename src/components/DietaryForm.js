import React, { Component } from "react";
import { Checkbox, Form, Button } from "semantic-ui-react";
import SubmissionMessage from "./SubmissionMessage";

class DietaryForm extends Component {
  state = {
    dietary_info: {
      //This user's dietary restrictions
      beef: false,
      pork: false,
      fish: false,
      eggs: false,
      milk: false,
      soy: false,
      gluten: false,
      nuts: false
    },
    trySubmit: false, //We are trying/tried to send new dietary information to the rest API
    didSubmit: false //If true, updating dietary info was successful
  };

  componentDidMount() {
    //Fetch User's Dietary preferences, set state
  }

  submitPreferences = () => {
    this.setState({ trySubmit: true });
    //Try Submitting to rest API

    //If Successful
    this.setState({ didSubmit: true });
  };

  usePreset = (e, data) => {
    if (data.name === "vegan") {
      this.setState({
        dietary_info: {
          beef: true,
          pork: true,
          fish: true,
          eggs: true,
          milk: true,
          soy: false,
          gluten: false,
          nuts: false
        }
      });
    } else if (data.name === "vegetarian") {
      this.setState({
        dietary_info: {
          beef: true,
          pork: true,
          fish: true,
          eggs: false,
          milk: false,
          soy: false,
          gluten: false,
          nuts: false
        }
      });
    }
    this.setState({ trySubmit: false });
  };

  handleCheckBox = (e, data) => {
    this.setState({ dietary_info: { [data.name]: data.checked } });
    this.setState({ trySubmit: false });
  };

  clearAll = () => {
    this.setState({
      dietary_info: {
        beef: false,
        pork: false,
        eggs: false,
        fish: false,
        milk: false,
        soy: false,
        nuts: false,
        gluten: false,
        vegan: false,
        vegetarian: false
      }
    });
    this.setState({ trySubmit: false });
  };

  render() {
    return (
      <div>
        <h3>Dietary Information</h3>
        <h4>Dietary Presets</h4>
        <Form>
          <Button
            basic
            color={"orange"}
            onClick={this.usePreset}
            name={"vegan"}
          >
            Vegan
          </Button>
          <Button
            basic
            color={"orange"}
            onClick={this.usePreset}
            name={"vegetarian"}
          >
            Vegetarian
          </Button>
        </Form>
        <h4>
          The following checked items will never appear in your recommendations.{" "}
        </h4>
        <Form>
          <Form.Field
            control={Checkbox}
            label={"Beef"}
            checked={this.state.dietary_info.beef}
            onChange={this.handleCheckBox}
          />
          <Form.Field
            control={Checkbox}
            label={"Pork"}
            checked={this.state.dietary_info.pork}
            onChange={this.handleCheckBox}
          />
          <Form.Field
            control={Checkbox}
            label={"Fish/Shellfish"}
            checked={this.state.dietary_info.fish}
            onChange={this.handleCheckBox}
          />
          <Form.Field
            control={Checkbox}
            label={"Eggs"}
            checked={this.state.dietary_info.eggs}
            onChange={this.handleCheckBox}
          />
          <Form.Field
            control={Checkbox}
            label={"Milk"}
            checked={this.state.dietary_info.milk}
            onChange={this.handleCheckBox}
          />
          <Form.Field
            control={Checkbox}
            label={"Soy"}
            checked={this.state.dietary_info.soy}
            onChange={this.handleCheckBox}
          />
          <Form.Field
            control={Checkbox}
            label={"Gluten"}
            checked={this.state.dietary_info.gluten}
            onChange={this.handleCheckBox}
          />
          <Form.Field
            control={Checkbox}
            label={"Peanuts/Tree Nuts"}
            checked={this.state.dietary_info.nuts}
            onChange={this.handleCheckBox}
          />
          <Button
            color={"orange"}
            type={"submit"}
            onClick={this.submitPreferences}
          >
            Update Dietary Restrictions
          </Button>
          <Button onClick={this.clearAll}>Clear All</Button>
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

export default DietaryForm;

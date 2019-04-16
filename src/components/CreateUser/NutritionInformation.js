import React, { Component } from "react";
import { Header, Grid, Form, Button, Checkbox, Icon } from "semantic-ui-react";

class NutritionInformation extends Component {
  state = {
    //This user's personal information
    beef: false,
    pork: false,
    fish: false,
    eggs: false,
    milk: false,
    soy: false,
    gluten: false,
    nuts: false,

    fieldsChanged: false,
    trySubmit: false, //We are trying/tried to send new personal information to the rest API
    didSubmit: false //If true, updating personal info was successful
  };

  componentDidMount() {
    //Retrieve account information
  }
  usePreset = (e, data) => {
    if (data.name === "vegan") {
      this.setState({
        beef: true,
        pork: true,
        fish: true,
        eggs: true,
        milk: true,
        soy: false,
        gluten: false,
        nuts: false,
        fieldsChanged: true
      });
    } else if (data.name === "vegetarian") {
      this.setState({
        beef: true,
        pork: true,
        fish: true,
        eggs: false,
        milk: false,
        soy: false,
        gluten: false,
        nuts: false,
        fieldsChanged: true
      });
    }
  };

  handleCheckBox = (e, data) => {
    this.setState({
      [data.name]: data.checked,
      fieldsChanged: true
    });
  };

  allBoxesAreUnchecked() {
    return (
      !this.state.beef &&
      !this.state.pork &&
      !this.state.fish &&
      !this.state.eggs &&
      !this.state.milk &&
      !this.state.soy &&
      !this.state.gluten &&
      !this.state.nuts
    );
  }

  clearAll = () => {
    this.setState({
      beef: false,
      pork: false,
      eggs: false,
      fish: false,
      milk: false,
      soy: false,
      nuts: false,
      gluten: false,
      vegan: false,
      vegetarian: false,
      fieldsChanged: true
    });
  };

  reportValues = () => {
    const data = {
      beef: this.state.beef,
      pork: this.state.pork,
      fish: this.state.fish,
      eggs: this.state.eggs,
      milk: this.state.milk,
      soy: this.state.spy,
      gluten: this.state.gluten,
      nuts: this.state.nuts
    };
    this.props.onSubmit(data);
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
        <Header as="h1" textAlign="center" style={{ marginBottom: "20" }}>
          Create Account Form
        </Header>
        <Grid style={{ paddingTop: "20" }} columns="2" centered="true">
          <Grid.Column style={{ maxWidth: 500 }}>
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
              The following checked items will never appear in your
              recommendations.{" "}
            </h4>
            <Form>
              <Form.Field
                control={Checkbox}
                name="beef"
                label={"Beef"}
                checked={this.state.beef}
                onChange={this.handleCheckBox}
              />
              <Form.Field
                control={Checkbox}
                name="pork"
                label={"Pork"}
                checked={this.state.pork}
                onChange={this.handleCheckBox}
              />
              <Form.Field
                control={Checkbox}
                name="fish"
                label={"Fish/Shellfish"}
                checked={this.state.fish}
                onChange={this.handleCheckBox}
              />
              <Form.Field
                control={Checkbox}
                name="eggs"
                label={"Eggs"}
                checked={this.state.eggs}
                onChange={this.handleCheckBox}
              />
              <Form.Field
                control={Checkbox}
                name="milk"
                label={"Milk"}
                checked={this.state.milk}
                onChange={this.handleCheckBox}
              />
              <Form.Field
                control={Checkbox}
                name="soy"
                label={"Soy"}
                checked={this.state.soy}
                onChange={this.handleCheckBox}
              />
              <Form.Field
                control={Checkbox}
                name="gluten"
                label={"Gluten"}
                checked={this.state.gluten}
                onChange={this.handleCheckBox}
              />
              <Form.Field
                control={Checkbox}
                name="nuts"
                label={"Peanuts/Tree Nuts"}
                checked={this.state.nuts}
                onChange={this.handleCheckBox}
              />
              <Button
                disabled={this.allBoxesAreUnchecked()}
                onClick={this.clearAll}
              >
                Clear All
              </Button>
            </Form>
          </Grid.Column>
          <Grid.Row>
            <Button
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

export default NutritionInformation;

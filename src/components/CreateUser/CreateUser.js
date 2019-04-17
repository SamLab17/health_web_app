import React, { Component } from "react";
import AccountInformation from "./AccountInformation";
import PersonalInformation from "./PersonalInformation";
import NutritionInformation from "./NutritionInformation";
import { Header } from "semantic-ui-react";

class CreateUser extends Component {
  state = {
    //This user's personal information
    accountInfo: {},
    nutritionInfo: {},
    personalInfo: {},
    currentPage: "account",
    fieldsChanged: false,
    trySubmit: false, //We are trying/tried to send new personal information to the rest API
    didSubmit: false //If true, updating personal info was successful
  };
  componentDidMount() {
    //Retrieve account information
  }

  getAccountInfo = data => {
    this.setState({ accountInfo: data, currentPage: "nutrition" });
  };

  getNutritionInfo = data => {
    this.setState({ nutritionInfo: data, currentPage: "personal" });
  };

  getPersonalInfo = data => {
    this.setState({ personalInfo: data });
  };

  componentDidUpdate() {}

  submitPreferences = () => {
    this.setState({ fieldsChanged: false, trySubmit: true, didSubmit: true });

    if (this.checkAllFieldsValid()) {
      //Try Submitting to rest API
    }

    //If Successful
    //this.setState({ didSubmit: true });
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

  renderPage = pageToLoad => {
    if (pageToLoad === "account") {
      return <AccountInformation onSubmit={this.getAccountInfo} />;
    } else if (pageToLoad === "nutrition") {
      return <NutritionInformation onSubmit={this.getNutritionInfo} />;
    } else if (pageToLoad === "personal") {
      return <PersonalInformation onSubmit={this.getPersonalInfo} />;
    }
    return null;
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
          Create Account
        </Header>

        {this.renderPage(this.state.currentPage)}
      </div>
    );
  }
}

export default CreateUser;

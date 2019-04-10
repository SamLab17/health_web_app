import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import axios from "axios";
import DietForm from "./DietaryForm";
import AccountInfoForm from "./AccountInfoForm";
import PersonalInfoForm from "./PersonalInfoForm";

class Preferences extends Component {
  state = {
    personal_info: {
      //This user's personal information
      firstName: "First Name",
      lastName: "Last Name",
      id: "0",
      email: "default@default.com"
    },
    trySubmitPersonalInfo: false, //We are trying/tried to send new personal information to the rest API
    didSubmitPersonalInfo: false //If true, updating personal info was successful
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      //console.log(response);
      let first = response.data[0];
      this.setState({
        firstName: first.name.split(" ")[0],
        lastName: first.name.split(" ")[1],
        id: first.id,
        email: first.email
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Preferences</h1>

        <Grid columns={2} divided>
          <Grid.Column>
            <AccountInfoForm />
            <div style={{ marginTop: 15 }} />
            <PersonalInfoForm />
          </Grid.Column>
          <Grid.Column>
            <DietForm />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Preferences;

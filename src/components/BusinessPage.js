import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

class BusinessPage extends Component {
  render() {
    return (
      <div>
        <Button
          color="orange"
          onClick={() => {
            this.props.history.push("login");
          }}
        >
          Log in
        </Button>
        <Button
          color="orange"
          onClick={() => {
            this.props.history.push("signup");
          }}
        >
          Create User
        </Button>
      </div>
    );
  }
}

export default withRouter(BusinessPage);

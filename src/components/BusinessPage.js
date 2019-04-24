import React, { Component } from "react";
import { Button, Segment, Container, Grid, Image } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import Background from "./bg.jpg";

class BusinessPage extends Component {
  render() {
    return (
      <div
        style={{
          height: "100%",
          backgroundImage: `url(${Background})`,
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <style>
          {`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
        backgroundImage: 'url(require('../bg.jpg'))',
      }
    `}
        </style>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Segment>
              <Image src="logo.png" />

              <Container style={{ height: "100%" }}>
                <Segment textAlign="center">
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
                </Segment>
              </Container>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default withRouter(BusinessPage);

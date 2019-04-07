import React, { Component } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

class FoodCard extends Component {
  render() {
    return (
      <Card>
        <Image centered src={this.props.ImageSource} size={"tiny"} />
        <Card.Content>
          <Card.Header>{this.props.Title}</Card.Header>
          <Card.Meta>{this.props.Subtitle}</Card.Meta>
          <Card.Description>{this.props.Description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link to={"/remove/" + this.props.id}>
            <Icon name={"x"} />
            Remove Item
          </Link>
        </Card.Content>
      </Card>
    );
  }
}

export default FoodCard;

import React, { Component } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

/*
Properties:
    ImageSource: URI to image file to display
    id: ID of food object in database

    Title: Title of card
    Subtitle: Subtitle of Card
    Description: Description for the Card
 */

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
          <Link
            to=""
            onClick={() => {
              this.props.handleRemove(this.props.id);
            }}
          >
            <Icon name={"x"} />
            Remove Item
          </Link>
        </Card.Content>
      </Card>
    );
  }
}

export default FoodCard;

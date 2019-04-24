import React, { Component } from "react";
import FoodCard from "./FoodCard";
import { Card } from "semantic-ui-react";

export default class FoodCardGroup extends Component {
  state = {
    cardsToDisplay: [1, 2, 3, 4],
    foods: [
      {
        id: 1,
        name: "Hawaiian BBQ Chicken",
        decription: "Main Dish",
        flags: "Gluten Free",
        img: "../chicken.jpg"
      },
      {
        id: 11,
        name: "Beef Taco",
        decription: "Main Dish",
        flags: "Gluten Free",
        img: "../taco.jpg"
      },
      {
        id: 2,
        name: "Garlic & Ginger Jasmine Rice",
        decription: "Side Dish",
        flags: "Vegan, Gluten Free",
        img: "../rice.jpg"
      },
      {
        id: 12,
        name: "Tortilla Chips",
        decription: "Side Dish",
        flags: "Vegan, Gluten Free",
        img: "../chips.jpg"
      },
      {
        id: 3,
        name: "Roasted Baby Carrots",
        decription: "Main Dish",
        flags: "Vegan, Gluten Free",
        img: "../carrots.jpg"
      },
      {
        id: 13,
        name: "Vegetable Mix",
        decription: "Side Dish",
        flags: "Vegan, Gluten Free",
        img: "../veggies.jpg"
      },
      {
        id: 4,
        name: "Freshly Baked Chocolate Chip Cookie",
        decription: "Dessert",
        flags: "Vegetarian",
        img: "../cookie.jpg"
      },
      {
        id: 14,
        name: "Ice Cream",
        decription: "Dessert",
        flags: "Vegetarian, Gluten Free",
        img: "../icecream.jpg"
      }
    ]
  };

  removeCard = id => {
    this.setState({
      cardsToDisplay: this.state.cardsToDisplay.map(num => {
        if (num > 10 && num === id) return num - 10;
        if (num === id) return num + 10;
        else return num;
      })
    });
  };

  render() {
    const cards = this.state.foods.map(foodItem => {
      if (this.state.cardsToDisplay.indexOf(foodItem.id) !== -1) {
        return (
          <FoodCard
            ImageSource={foodItem.img}
            Title={foodItem.name}
            Subtitle={foodItem.description}
            Description={foodItem.flags}
            handleRemove={this.removeCard}
            id={foodItem.id}
            key={foodItem.id}
          />
        );
      }
      return null;
    });
    return (
      <Card.Group itemsPerRow={"2"} stackable>
        {cards}
      </Card.Group>
    );
  }
}

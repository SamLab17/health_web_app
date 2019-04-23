import React, { Component } from "react";
import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";
import FoodCard from "./FoodCard";
import { Responsive, Grid, Card, Statistic } from "semantic-ui-react";

class Home extends Component {
  handleRemoveCard = id => {
    //console.log("remove " + id);
  };

  render() {
    let data = [
      //Data just for testing the doughnut graph
      {
        value: 200,
        color: "#f8971f",
        highlight: "#f8971f",
        label: "Orange"
      },
      {
        value: 50,
        color: "#ffd600",
        highlight: "#ffd600",
        label: "Yellow"
      },
      {
        value: 100,
        color: "#a6cd57",
        highlight: "#a6cd57",
        label: "Green"
      },
      {
        value: 80,
        color: "rgb(0, 169, 183)",
        highlight: "rgb(0, 169, 183)",
        label: "Blue"
      }
    ];

    let barData = {
      labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      datasets: [
        {
          label: "# of Votes",
          fillColor: [
            "rgba(87, 157, 66, 0.5)",
            "rgba(239, 58, 50, 0.5)",
            "rgba(87, 157, 66, 0.5)",
            "rgba(239, 58, 50, 0.5)",
            "rgba(234, 176, 46, 0.5)",
            "rgba(87, 157, 66, 0.5)",
            "rgba(234, 176, 46, 0.5)"
          ],
          strokeColor: [
            "rgb(87, 157, 66)",
            "rgb(239, 58, 50)",
            "rgb(87, 157, 66)",
            "rgb(239, 58, 50)",
            "rgb(234, 176, 46)",
            "rgb(87, 157, 66)",
            "rgb(234, 176, 46)"
          ],
          borderWidth: 1,
          data: [2200, 2500, 2200, 2500, 1800, 2200, 2350]
        }
      ]
    };
    let options = {
      scaleBeginAtZero: false,
      scaleOverride: true,
      // ** Required if scaleOverride is true **
      // Number - The number of steps in a hard coded scale
      scaleSteps: 5,
      // Number - The value jump in the hard coded scale
      scaleStepWidth: 300,
      // Number - The scale starting value
      scaleStartValue: 1600
    };

    return (
      <div>
        <h1> Home </h1>
        <Grid columns={2} padded>
          <Grid.Column verticalAlign={"middle"} floated={"left"}>
            <Grid.Row>
              <Grid columns={"equal"} padded={"vertically"}>
                <Grid.Column verticalAlign={"middle"} stretched>
                  <Responsive
                    as={DoughnutChart}
                    title="Pie Graph"
                    height="180"
                    data={data}
                    options={{
                      animationEasing: "easeOutExpo",
                      percentageInnerCutout: 70
                    }}
                  />
                </Grid.Column>
                <Grid.Column
                  verticalAlign={"middle"}
                  textAlign={"center"}
                  only="computer"
                >
                  <Statistic>
                    <Statistic.Value>5,500</Statistic.Value>
                    <Statistic.Label>Points</Statistic.Label>
                  </Statistic>
                </Grid.Column>
              </Grid>
            </Grid.Row>
            <Grid.Row>
              <Grid columns={"equal"} padded={"vertically"}>
                <Grid.Column>
                  <Responsive
                    as={BarChart}
                    title="Bar Graph"
                    height="320"
                    data={barData}
                    options={options}
                  />
                </Grid.Column>
                <Grid.Column
                  verticalAlign={"middle"}
                  textAlign={"center"}
                  only="computer"
                >
                  <Statistic>
                    <Statistic.Value>20</Statistic.Value>
                    <Statistic.Label>Day Pulse</Statistic.Label>
                  </Statistic>
                </Grid.Column>
              </Grid>
            </Grid.Row>
          </Grid.Column>

          <Grid.Column
            verticalAlign={"top"}
            floated={"right"}
            textAlign={"left"}
          >
            <Card.Group itemsPerRow={"2"} stackable>
              <FoodCard
                ImageSource={"../chicken.jpg"}
                Title="Hawaiian BBQ Chicken"
                Subtitle="Main Dish"
                Description="Gluten Free"
                handleRemove={this.props.handleRemoveCard}
                id="1"
              />
              <FoodCard
                ImageSource={"../rice.jpg"}
                Title="Garlic & Ginger Jasmine Rice"
                Subtitle="Side Dish"
                Description="Vegan, Gluten Free"
                handleRemove={this.props.handleRemoveCard}
                id="2"
              />
              <FoodCard
                ImageSource={"../carrots.jpg"}
                Title="Roasted Baby Carrots"
                Subtitle="Side Dish"
                Description="Vegan, Gluten Free"
                handleRemove={this.props.handleRemoveCard}
                id="3"
              />
              <FoodCard
                ImageSource={"../cookie.jpg"}
                Title="Freshly Baked Chocolate Chip Cookie"
                Subtitle="Dessert"
                Description="Vegetarian"
                handleRemove={this.props.handleRemoveCard}
                id="4"
              />
            </Card.Group>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Home;

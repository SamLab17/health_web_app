import React, {Component} from "react";
import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";
import FoodCard from "./FoodCard";
import {Grid, Card,Statistic, Container} from "semantic-ui-react";

class Home extends Component{
    render(){
        let data = [  //Data just for testing the doughnut graph
            {
                value: 300,
                color:"#f8971f",
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
            }
        ];

        let barData = {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [{
                label: '# of Votes',
                fillColor:[
                    "rgba(248, 151, 31, 0.5)",
                    "rgba(255, 214, 0,0.5)",
                    "rgba(166, 205, 87,0.5)",
                    "rgba(87, 157, 66,0.5)",
                    "rgba(0, 169, 183,0.5)",
                    "rgba(0, 95, 134,0.5)",
                    "rgba(156, 173, 183,0.5)",
                ],
                strokeColor: [
                    "rgb(248, 151, 31)",
                    "rgb(255, 214, 0)",
                    "rgb(166, 205, 87)",
                    "rgb(87, 157, 66)",
                    "rgb(0, 169, 183)",
                    "rgb(0, 95, 134)",
                    "rgb(156, 173, 183)",
                ],
                borderWidth: 1,
                data: [12, 20, 3, 5, 2, 3, 6]
            }]
        };
        let options= {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        };

        return (
            <div>
                <h1> Home </h1>
                <Grid columns={2} padded >
                    <Grid.Column verticalAlign={"middle"} floated={"left"}>
                        <Grid.Row>
                            <Grid columns={2} padded={"vertically"}>
                                <Grid.Column>
                                    <DoughnutChart  title="My Graph" data = {data} options={{animationEasing: "easeOutExpo", percentageInnerCutout: 70}}/>
                                </Grid.Column>
                                <Grid.Column verticalAlign={"middle"} textAlign={"center"}>
                                    <Statistic>
                                        <Statistic.Value>5,500</Statistic.Value>
                                        <Statistic.Label>Points</Statistic.Label>
                                    </Statistic>
                                </Grid.Column>
                            </Grid>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid columns={2} padded={"vertically"}>
                                <Grid.Column>
                                    <BarChart title="My Bar Graph" height="300" data = {barData} options={options}/>
                                </Grid.Column>
                                <Grid.Column verticalAlign={"middle"}textAlign={"center"}>
                                    <Statistic>
                                        <Statistic.Value>20</Statistic.Value>
                                        <Statistic.Label>Day Pulse</Statistic.Label>
                                    </Statistic>
                                </Grid.Column>
                            </Grid>

                        </Grid.Row>
                    </Grid.Column>

                    <Grid.Column verticalAlign={"top"} floated={"right"}  textAlign={"left"}>
                        <Card.Group  itemsPerRow={"2"}>
                        <FoodCard ImageSource={""} Title="Carrot" Subtitle="Side Dish"
                                  Description="Vegan, Vegetarian"/>
                            <FoodCard ImageSource={""} Title="Carrot" Subtitle="Vegan, Vegetarian"
                                      Description="Side Dish"/>
                            <FoodCard ImageSource={""} Title="Carrot" Subtitle="Side Dish"
                                      Description="I am a carrot and I am orange but I am not an orange." />
                            <FoodCard ImageSource={""} Title="Potato" Subtitle="Side Dish"
                                  Description="I'm a real spud. But I can also be a real chip on your shoulder." />
                        </Card.Group>
                    </Grid.Column>
                </Grid>
            </div>

        );

    }
}

export default Home;
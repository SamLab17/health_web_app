import React, {Component} from "react";
import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";

class Home extends Component{
    render(){
        let data = [  //Data just for testing the doughnut graph
            {
                value: 300,
                color:"#F7464A",
                highlight: "#FF5A5E",
                label: "Red"
            },
            {
                value: 50,
                color: "#46BFBD",
                highlight: "#5AD3D1",
                label: "Blue"
            },
            {
                value: 100,
                color: "#FDB45C",
                highlight: "#FFC870",
                label: "Yellow"
            }
        ];

        let barData = {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [{
                label: '# of Votes',
                fillColor:[
                    "rgba(255, 99, 132,0.5)",
                    "rgba(255, 159, 64,0.5)",
                    "rgba(255, 205, 86,0.5)",
                    "rgba(75, 192, 192,0.5)",
                    "rgba(54, 162, 235,0.5)",
                    "rgba(153, 102, 255,0.5)",
                    "rgba(201, 203, 207,0.5)",
                ],
                strokeColor: [
                    "rgb(255, 99, 132)",
                    "rgb(255, 159, 64)",
                    "rgb(255, 205, 86)",
                    "rgb(75, 192, 192)",
                    "rgb(54, 162, 235)",
                    "rgb(153, 102, 255)",
                    "rgb(201, 203, 207)",
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
                <h1> Home</h1>
                <DoughnutChart  title="My Graph" data = {data} options={{animationEasing: "easeOutExpo", percentageInnerCutout: 70}}/>
                <BarChart title="My Bar Graph" height="300" data = {barData} options={options}/>
            </div>

        );

    }
}

export default Home;
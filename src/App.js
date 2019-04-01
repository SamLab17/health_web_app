import React from "react";
import Sidebar from "./components/Sidebar";
import DoughnutChart from "./components/DoughnutChart"
import BarChart from "./components/BarChart";

class App extends React.Component {

  //currentPage = name of the page we hae currently selected with the sidebar
  state={
    currentPage:"home"
  };

  updatePage = (selectedPage) => {  //Updates which page we are currently viewing
    this.setState({currentPage: selectedPage})
  };


  render() {
    var data = [  //Data just for testing the doughnut graph
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
    const horizData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };

    return this.state.currentPage === "home" ? (
        <div>
        <Sidebar updatePage={this.updatePage} currentPage={this.state.currentPage}/>
        <DoughnutChart  title="My Graph" data = {data} options={{animationEasing: "easeOutExpo", percentageInnerCutout: 70}}/>
        <BarChart title="My Bar Graph" height="300" data = {barData} options={options}/>
        </div>
      ): (
          <Sidebar updatePage={this.updatePage} currentPage={this.state.currentPage}/>
    );
  }
}
export default App;
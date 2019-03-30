import React from "react";
import Sidebar from "./components/Sidebar";
import DoughnutChart from "./components/DoughnutChart"

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
        label: "Green"
      },
      {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
      }
    ];
    return (
        <div>
        <Sidebar updatePage={this.updatePage} currentPage={this.state.currentPage}/>
        <DoughnutChart title="My Graph" data = {data} options={{animationEasing: "easeOutExpo", percentageInnerCutout: 70}}/>
        </div>
      );
  }
}
export default App;
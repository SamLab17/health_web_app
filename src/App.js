import React from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Preferences from "./components/Preferences";


class App extends React.Component {

  //currentPage = name of the page we hae currently selected with the sidebar
  state={
    currentPage:"home",
    sidebarOpen:false
  };

  updatePage = (selectedPage) => {  //Updates which page we are currently viewing
    this.setState({currentPage: selectedPage})
  };

  handleSidebarToggle = (isOpen) => {
    this.setState({sidebarOpen : isOpen});
    console.log(this.state.sidebarOpen)
  };

  render() {

    let pageToRender;
    if(this.state.currentPage === "home")
      pageToRender = (
          <Home />
      );
    else if(this.state.currentPage === "preferences")
      pageToRender = (
          <Preferences />
      );

    return (
        <div>
        <Sidebar updatePage={this.updatePage} currentPage={this.state.currentPage} handleSidebarToggle={this.handleSidebarToggle}/>
        <div style={{
          marginLeft: this.state.sidebarOpen ? 240: 64,
          paddingLeft: 20,
          paddingTop: 10,
          transition: 'all .15s',
          position: 'relative'
         }}>
            {pageToRender}
          </div>
        </div>
    );
  }
}
export default App;
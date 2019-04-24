import React from "react";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Preferences from "./Preferences";
import { BrowserRouter, Route } from "react-router-dom";

class MainApp extends React.Component {
  state = {
    sidebarOpen: false,
    userId: this.props.match.params.userId
  };

  handleSidebarToggle = isOpen => {
    this.setState({ sidebarOpen: isOpen });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Sidebar
            updatePage={this.updatePage}
            handleSidebarToggle={this.handleSidebarToggle}
            userId={this.state.userId}
          />
          <div
            className="mainSection"
            style={{
              marginLeft: this.state.sidebarOpen ? 240 : 64,
              paddingLeft: 20,
              paddingTop: 10,
              transition: "all .15s",
              position: "relative",
              height: "100%"
            }}
          >
            <Route exact path={"/user/" + this.state.userId} component={Home} />
            <Route
              path={"/user/" + this.state.userId + "/preferences"}
              component={Preferences}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default MainApp;

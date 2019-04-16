import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MainApp from "./components/MainApp";
import Login from "./components/Login";
import CreateUser from "./components/CreateUser/CreateUser";
import BusinessPage from "./components/BusinessPage";

class App extends React.Component {
  state = {
    sidebarOpen: false,
    loggedIn: false
  };

  handleSidebarToggle = isOpen => {
    this.setState({ sidebarOpen: isOpen });
  };

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={BusinessPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={CreateUser} />
        <Route path="/user/:userId" component={MainApp} />
      </BrowserRouter>
    );
  }
}

export default App;

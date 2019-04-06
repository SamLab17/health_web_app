import React from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Preferences from "./components/Preferences";
import {BrowserRouter, Route} from "react-router-dom";


class App extends React.Component {

    state = {
        sidebarOpen: false
    };

    handleSidebarToggle = (isOpen) => {
        this.setState({sidebarOpen: isOpen});
        console.log(this.state.sidebarOpen)
    };

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Sidebar updatePage={this.updatePage} handleSidebarToggle={this.handleSidebarToggle}/>
                    <div style={{
                        marginLeft: this.state.sidebarOpen ? 240 : 64,
                        paddingLeft: 20,
                        paddingTop: 10,
                        transition: 'all .15s',
                        position: 'relative'
                    }}>
                        <Route exact path={"/"}  component={Home}/>
                        <Route path={"/preferences"} component={Preferences}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
import React, { Component } from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import "@trendmicro/react-sidenav/dist/react-sidenav.css";

//Styling to make the navbar's background be orange
const StyledSideNav = styled(SideNav)`
  background-color: #f2711c;
`;
StyledSideNav.defaultProps = SideNav.defaultProps;

class Sidebar extends Component {
  pageLinks = {
    home: "/",
    preferences: "preferences"
  };

  updatePage = newPage => {
    this.props.history.push(this.pageLinks[newPage]);
  };

  render() {
    return (
      <div>
        <StyledSideNav
          onSelect={this.updatePage}
          onToggle={this.props.handleSidebarToggle}
        >
          <SideNav.Toggle />
          <StyledSideNav.Nav>
            <NavItem eventKey="home">
              <NavIcon>
                <i
                  className="fa fa-fw fa-home"
                  style={{ fontSize: "1.75em", color: "white" }}
                />
              </NavIcon>
              <NavText>Home</NavText>
            </NavItem>
            <NavItem eventKey="preferences">
              <NavIcon>
                <i
                  className="fa fa-fw fa-gear"
                  style={{ fontSize: "1.75em", color: "white" }}
                />
              </NavIcon>
              <NavText>Preferences</NavText>
            </NavItem>
          </StyledSideNav.Nav>
        </StyledSideNav>
      </div>
    );
  }
}

export default withRouter(Sidebar);

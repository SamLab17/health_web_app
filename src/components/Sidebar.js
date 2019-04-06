import React, {Component} from "react";
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {withRouter} from "react-router-dom";
//import styled from 'styled-components';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

// const SectionTitle = styled.main`
//     background: #eeeeee;
//     position: relative;
//     overflow: hidden;
//     transition: all .15s;
//     padding: 0 20px;
//     margin-left: ${props => (props.expanded ? 240 : 64)}px;
//     padding-top: 17px;
//     padding-bottom: 17px;
//     font-size: 25px;
// `;

class Sidebar extends Component {
    pageLinks = {
        'home' : "/",
        'preferences' : "preferences"
    };

    updatePage = (newPage) =>{
        this.props.history.push(this.pageLinks[newPage]);
    };

    render() {
        return (
            <div>
                <SideNav onSelect={this.updatePage} onToggle={this.props.handleSidebarToggle}>
                    <SideNav.Toggle/>
                    <SideNav.Nav defaultSelected={this.props.currentPage}>
                        <NavItem eventKey="home">
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{fontSize: '1.75em'}}/>
                            </NavIcon>
                            <NavText>
                                Home
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="preferences">
                            <NavIcon>
                                <i className="fa fa-fw fa-gear" style={{fontSize: '1.75em'}}/>
                            </NavIcon>
                            <NavText>
                                Preferences
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
            </div>
        );
    }
}

export default withRouter(Sidebar);
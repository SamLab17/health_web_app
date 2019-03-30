import React, {Component} from "react";
import styled from 'styled-components';

//CSS for the entire graph element
const Graph = styled.main`
    margin-top: ${props => (props.y)}px;
    margin-left: ${props => (props.x)}px;
    display: inline-block;
`;

//CSS for the title of the graph
const GraphTitle = styled.main`
    font-size: 20px;
    text-align: center;
    color: black;
    width:100%;
`;

class DoughnutChart extends Component{

    render(){
        let Doughnut = require("react-chartjs").Doughnut;
        return (
            <Graph x={this.props.x} y={this.props.y}>
                <GraphTitle>
                {this.props.title}
                </GraphTitle>
                <Doughnut x="20" y="20" data = {this.props.data} options = {this.props.options}/>
            </Graph>
        );
    }
}

export default DoughnutChart;
import React, { Component } from "react";
//import styled from 'styled-components';

import { Container } from "semantic-ui-react";

/*
Properties:
    title: title to be displayed above chart (leave blank for none)
    width: width of HTML canvas created by charts.js
    height: height of HTML canvas created by charts.js
    x: X offset of chart & title (applied to CSS margin-left)
    y: Y offset of chart & title (applied to CSS margin-top)
    data: Data to be displayed by chart (see chart.js documentation)
    options: Options for the chart (see chart.js documentation)
 */

class BarChart extends Component {
  render() {
    let Bar = require("react-chartjs").Bar;
    return (
      <Container textAlign="center">
        <h2>{this.props.title}</h2>
        <Bar
          height={this.props.height}
          width={this.props.width}
          data={this.props.data}
          options={this.props.options}
        />
      </Container>
    );
  }
}

export default BarChart;

import React, { Component } from 'react';
import './page2.css'
import {Card, colors} from './Card'
import {Row, Col} from './cols_rows'

import ChartistGraph from 'react-chartist';
 
class Pie extends React.Component {
  render() {
    var data = {
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
      series: [
        [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
      ]
    };
 
    var options = {
      high: 10,
      low: -10,
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return index % 2 === 0 ? value : null;
        }
      }
    };
 
    var type = 'Bar'
 
    return (
      <div>
        <ChartistGraph data={data} options={options} type={type} />
      </div>
    )
  }

  loadScript(url) {
    var script = document.createElement('script');
    script.async = false;
    script.src = url;
    document.head.appendChild(script);
  }

  loadStyle(url) {
    var sheet = document.createElement('link');
    sheet.rel = 'stylesheet';
    sheet.href = url;
    sheet.type = 'text/css';
    document.head.appendChild(sheet);
  }

  componentWillMount () {
    this.loadStyle('//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css');
    this.loadScript('//cdn.jsdelivr.net/chartist.js/latest/chartist.min.js');
  }
}

export default class extends Component {
  render () {
    return [
      <Row split={4}>
        <Col slots={2} color={colors.dark}>
          <Pie />
        </Col>
        <Col slots={1} color={colors.dark}>
          Data1
        </Col>
        <Col slots={1} color={colors.dark}>
          Data2
        </Col>
      </Row>
    ]
  }
}
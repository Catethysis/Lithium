import React, { Component } from 'react';
import './page2.css'
import {Card, colors} from './Card'

class Row extends Component {
  render () {
    let totalSlots = 0;
    const children = React.Children.map(this.props.children, child => {
      totalSlots += Number(child.props.slots);
      return React.cloneElement(child, {
        split: this.props.split
      });
    });
    if(totalSlots > this.props.split)
      throw new Error(`Too many slots (${totalSlots} of ${this.props.split})`);
    if(totalSlots < this.props.split)
      throw new Error(`Too few slots (${totalSlots} of ${this.props.split})`);
    return (
      <div className="columns_holder">
        {children}
      </div>
    )
  }
}

class Col extends Component {
  render() {
    let width = (this.props.slots / this.props.split) * 100 + '%';
    return (
      <div className="column" style={{width: width}}>
        <Card color={this.props.color}>
          {this.props.children}
        </Card>
      </div>
    )
  }
}

export default class extends Component {
  render () {
    return [
      <h2>Basic columns</h2>,

      <Row split={1}>
        <Col slots={1} color={colors.warning}>
          Column 1/1
        </Col>
      </Row>,

      <Row split={2}>
        <Col slots={1} color={colors.warning}>
          Column 1/2
        </Col>
        <Col slots={1} color={colors.success}>
          Column 2/2
        </Col>
      </Row>,

      <Row split={3}>
        <Col slots={1} color={colors.warning}>
          Column 1/3
        </Col>
        <Col slots={1} color={colors.success}>
          Column 2/3
        </Col>
        <Col slots={1} color={colors.info}>
          Column 3/3
        </Col>
      </Row>,

      <Row split={4}>
        <Col slots={1} color={colors.warning}>
          Column 1/4
        </Col>
        <Col slots={1} color={colors.success}>
          Column 2/4
        </Col>
        <Col slots={1} color={colors.info}>
          Column 3/4
        </Col>
        <Col slots={1} color={colors.danger}>
          Column 4/4
        </Col>
      </Row>,

      <Row split={5}>
        <Col slots={1} color={colors.warning}>
          Column 1/5
        </Col>
        <Col slots={1} color={colors.success}>
          Column 2/5
        </Col>
        <Col slots={1} color={colors.info}>
          Column 3/5
        </Col>
        <Col slots={1} color={colors.danger}>
          Column 4/5
        </Col>
        <Col slots={1} color={colors.primary}>
          Column 5/5
        </Col>
      </Row>,

      <Row split={6}>
        <Col slots={1} color={colors.warning}>
          Column 1/6
        </Col>
        <Col slots={1} color={colors.success}>
          Column 2/6
        </Col>
        <Col slots={1} color={colors.info}>
          Column 3/6
        </Col>
        <Col slots={1} color={colors.danger}>
          Column 4/6
        </Col>
        <Col slots={1} color={colors.primary}>
          Column 5/6
        </Col>
        <Col slots={1} color={colors.secondary}>
          Column 6/6
        </Col>
      </Row>,

      <h2>Columns with multiline text</h2>,

      <Row split={4}>
        <Col slots={1} color={colors.warning}>
          Column 1/3<br/>with information<br />in several lines
        </Col>
        <Col slots={1} color={colors.success}>
          Column 2/3
        </Col>
        <Col slots={2} color={colors.info}>
          Column 3/3
        </Col>
      </Row>,

      <Row split={6}>
        <Col slots={1} color={colors.warning}>
        Column 1/4<br/>with information<br />in several lines
        </Col>
        <Col slots={1} color={colors.success}>
          Column 2/4
        </Col>
        <Col slots={3} color={colors.info}>
          Column 3/4
        </Col>
        <Col slots={1} color={colors.danger}>
          Column 4/4
        </Col>
      </Row>
    ]
  }
}
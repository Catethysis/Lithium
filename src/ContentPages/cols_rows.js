import React, { Component } from 'react';
import {Card, colors} from './Card'
import './page2.css'

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

export {Row, Col}
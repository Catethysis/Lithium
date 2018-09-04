import React, { Component } from 'react';

let colors = {
  primary:   '#007bff',
  secondary: '#6c757d',
  success:   '#28a745',
  info:      '#17a2b8',
  warning:   '#ffc107',
  danger:    '#dc3545',
  light:     '#f8f9fa',
  // dark:      '#343a40',
  dark:      '#3c464b',
};

class Card extends Component {
  render () {
    let shadow = '0px 0px 3px 1px ' + this.props.color; //ddd
    return (
      <div style={{
        minHeight: '1em',
        padding: 15,
        marginBottom: 15,
        
        borderRadius: 3,
        boxShadow: shadow,
        backgroundColor: this.props.color,

        color: '#fff'
      }}>
        {this.props.children}
      </div>
    )
  }
}

export {Card, colors}
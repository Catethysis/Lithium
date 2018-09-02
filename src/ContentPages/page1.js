import React, { Component } from 'react';

let color_primary =   '#007bff';
let color_secondary = '#6c757d';
let color_success =   '#28a745';
let color_info =      '#17a2b8';
let color_warning =   '#ffc107';
let color_danger =    '#dc3545';
let color_light =     '#f8f9fa';
let color_dark =      '#343a40';

class LongCard extends Component {
  render () {
    return (
      <div style={{
        minHeight: '1em',
        padding: 15,
        marginBottom: 15,
        
        border: '1px solid #ccc',
        borderRadius: 3,
        boxShadow: '0px 0px 3px 1px #ddd',
        backgroundColor: this.props.color,

        color: '#fff'
      }}>
      {this.props.children}
      </div>
    )
  }
}

export default class extends Component {
  render () {
    return [
      <LongCard color={color_warning}>
        A great text asks deep card.
      </LongCard>,
      <LongCard color={color_success}>
        Another pretty card<br />that supports multiline text!
      </LongCard>
    ]
  }
}
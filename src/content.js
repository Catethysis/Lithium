import React, { Component } from 'react';

export default class Content extends Component {
  render () {
    return (
      <div style={{
        marginLeft: 230,
        marginBottom: 0,
        padding: 15,
        position: 'relative',
        display: 'block',

        backgroundColor: '#333',
        color: '#fff',
        boxShadow: 'inset 1px 4px 9px -6px'
      }}>
      {this.props.children}
      </div>
    )
  }
}
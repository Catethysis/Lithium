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
        boxShadow: 'inset 0px 7px 9px -7px #38b'
      }}>
      {this.props.children}
      </div>
    )
  }
}
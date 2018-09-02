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

        backgroundColor: '#ddd'
      }}>
      {this.props.children}
      </div>
    )
  }
}
import React, { Component } from 'react';

export default class Header_aside extends Component {
  render () {
    return (
      <a style={{
          width: 230,
          height: 50,
          position: 'absolute',
          top: 0,

          lineHeight: '50px',
          textAlign: 'center',
          fontFamily: 'Helvetica Neue",Helvetica,Arial,sans-serif',
          fontSize: 20,
          color: '#fff',

          display: 'inline-block',
          backgroundColor: '#367fa9',
          float: 'top'
        }}>
        {this.props.name}
      </a>
    )
  }
}
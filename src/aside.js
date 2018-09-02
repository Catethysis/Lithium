import React, { Component } from 'react';
import './aside.css'

export default class Aside extends Component {
  render () {
    let items = [
      'Item1',
      'Item2',
      'Item3',
      'Item4',
      'Item5',
      'Item6',
      'Item7',
      'Item8'
    ];
    return (
      <ul style={{
        width: 230,
        position: 'absolute',
        minHeight: '100%',
        padding: 0,
        margin: 0,

        backgroundColor: '#2e3e4e'
      }}>
        {
          items.map((item, i) => {
            return <li className={'aside-li' + (i == 3 ? ' active' : '')}>
              {item}
            </li>
          })
        }
      </ul>
    )
  }
}
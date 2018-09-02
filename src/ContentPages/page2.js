import React, { Component } from 'react';
import './page2.css'
import {Card, colors} from './Card'

export default class extends Component {
  render () {
    return [
      <div className="¼">
        <Card color={colors.warning}>
          Column 1
        </Card>
      </div>,
      <div className="¼">
        <Card color={colors.success}>
          Column 2
        </Card>
      </div>,
      <div className="¼">
        <Card color={colors.info}>
          Column 3
        </Card>
      </div>,
      <div className="¼">
        <Card color={colors.danger}>
          Column 4
        </Card>
      </div>
    ]
  }
}
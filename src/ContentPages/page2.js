import React, { Component } from 'react';
import './page2.css'
import {LongCard, colors} from './longCard.js'

export default class extends Component {
  render () {
    return [
      <div className="¼">
        <LongCard color={colors.warning}>
          Column 1
        </LongCard>
      </div>,
      <div className="¼">
        <LongCard color={colors.success}>
          Column 2
        </LongCard>
      </div>,
      <div className="¼">
        <LongCard color={colors.info}>
          Column 3
        </LongCard>
      </div>,
      <div className="¼">
        <LongCard color={colors.danger}>
          Column 4
        </LongCard>
      </div>
    ]
  }
}
import React, { Component } from 'react';
import {LongCard, colors} from './longCard.js'

export default class extends Component {
  render () {
    return [
      <LongCard color={colors.warning}>
        A great text asks deep card.
      </LongCard>,
      <LongCard color={colors.success}>
        Another pretty card<br />that supports multiline text!
      </LongCard>
    ]
  }
}
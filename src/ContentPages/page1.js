import React, { Component } from 'react';
import {Card, colors} from './Card.js'

export default class extends Component {
  render () {
    return [
      <h2>Page-wide cards (called "alerts")</h2>,
      <Card color={colors.warning}>
        A great text asks deep card.
      </Card>,
      <Card color={colors.success}>
        Another pretty card<br />that supports multiline text!
      </Card>
    ]
  }
}
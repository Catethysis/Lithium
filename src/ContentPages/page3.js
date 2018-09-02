import React, { Component } from 'react';
import './page2.css'
import {Card, colors} from './Card'

export default class extends Component {
  render () {
    return [
      <div className="2_of_½ columns_holder">
        <div className="¼">
          <Card color={colors.dark}>
            Information<br />in several lines
          </Card>
        </div>
        <div className="¼">
          <Card color={colors.dark}>
            Column 2/3
          </Card>
        </div>
        <div className="½">
          <Card color={colors.dark}>
            Column 3/3
          </Card>
        </div>
      </div>
    ]
  }
}
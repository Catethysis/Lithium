import React, { Component } from 'react';
import './page2.css'
import {Card, colors} from './Card'

export default class extends Component {
  render () {
    return [
      <div id="1_of_⅟" className="columns_holder">
        <div className="⅟">
          <Card color={colors.warning}>
            Column 1/1
          </Card>
        </div>
      </div>,

      <div id="2_of_½" className="columns_holder">
        <div className="½">
          <Card color={colors.warning}>
            Column 1/2
          </Card>
        </div>
        <div className="½">
          <Card color={colors.success}>
            Column 2/2
          </Card>
        </div>
      </div>,

      <div id="3_of_⅓" className="columns_holder">
        <div className="⅓">
          <Card color={colors.warning}>
            Column 1/3
          </Card>
        </div>
        <div className="⅓">
          <Card color={colors.success}>
            Column 2/3
          </Card>
        </div>
        <div className="⅓">
          <Card color={colors.info}>
            Column 3/3
          </Card>
        </div>
      </div>,

      <div id="4_of_¼" className="columns_holder">
        <div className="¼">
          <Card color={colors.warning}>
            Column 1/4
          </Card>
        </div>
        <div className="¼">
          <Card color={colors.success}>
            Column 2/4
          </Card>
        </div>
        <div className="¼">
          <Card color={colors.info}>
            Column 3/4
          </Card>
        </div>
        <div className="¼">
          <Card color={colors.danger}>
            Column 4/4
          </Card>
        </div>
      </div>,

      <div id="5_of_⅕" className="columns_holder">
        <div className="⅕">
          <Card color={colors.warning}>
            Column 1/5
          </Card>
        </div>
        <div className="⅕">
          <Card color={colors.success}>
            Column 2/5
          </Card>
        </div>
        <div className="⅕">
          <Card color={colors.info}>
            Column 3/5
          </Card>
        </div>
        <div className="⅕">
          <Card color={colors.danger}>
            Column 4/5
          </Card>
        </div>
        <div className="⅕">
          <Card color={colors.primary}>
            Column 5/5
          </Card>
        </div>
      </div>,

      <div id="6_of_⅙" className="columns_holder">
        <div className="⅙">
          <Card color={colors.warning}>
            Column 1/6
          </Card>
        </div>
        <div className="⅙">
          <Card color={colors.success}>
            Column 2/6
          </Card>
        </div>
        <div className="⅙">
          <Card color={colors.info}>
            Column 3/6
          </Card>
        </div>
        <div className="⅙">
          <Card color={colors.danger}>
            Column 4/6
          </Card>
        </div>
        <div className="⅙">
          <Card color={colors.primary}>
            Column 5/6
          </Card>
        </div>
        <div className="⅙">
          <Card color={colors.secondary}>
            Column 6/6
          </Card>
        </div>
      </div>,

      <div id="¼+¼+½" className="columns_holder">
        <div className="¼">
          <Card color={colors.warning}>
            Column 1/3<br/>with information<br />in several lines
          </Card>
        </div>
        <div className="¼">
          <Card color={colors.success}>
            Column 2/3
          </Card>
        </div>
        <div className="½">
          <Card color={colors.info}>
            Column 3/3
          </Card>
        </div>
      </div>,

      <div id="⅙+⅙+½+⅙" className="columns_holder">
        <div className="⅙">
          <Card color={colors.warning}>
            Column 1/4<br/>with information<br />in several lines
          </Card>
        </div>
        <div className="⅙">
          <Card color={colors.success}>
            Column 2/4
          </Card>
        </div>
        <div className="½">
          <Card color={colors.info}>
            Column 3/4
          </Card>
        </div>
        <div className="⅙">
          <Card color={colors.danger}>
            Column 4/4
          </Card>
        </div>
      </div>
    ]
  }
}
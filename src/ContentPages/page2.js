import React, { Component } from 'react';
import './page2.css'
import {Card, colors} from './Card'

export default class extends Component {
  render () {
    return [
      <div className="1_of_⅟ columns_holder">
        <div className="⅟">
          <Card color={colors.warning}>
            Column 1/1
          </Card>
        </div>
      </div>,

      <div className="2_of_½ columns_holder">
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

      <div className="3_of_⅓ columns_holder">
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

      <div className="4_of_¼ columns_holder">
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

      <div className="5_of_⅕ columns_holder">
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

      <div className="6_of_⅙ columns_holder">
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
      </div>
    ]
  }
}
import React, { Component } from 'react';
import {Card, colors} from './Card'
import {Row, Col} from './cols_rows'

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vfb: 0.8,
      out_min: 5,
      out_max: 12,
      adc_min: 0,
      adc_max: 3.3,
      r2: 20,
      r1: 0,
      r3: 0
    };

    this.handleVfb = this.handleVfb.bind(this);
    this.handleOutMin = this.handleOutMin.bind(this);
    this.handleOutMax = this.handleOutMax.bind(this);
    this.handleADCmin = this.handleADCmin.bind(this);
    this.handleADCmax = this.handleADCmax.bind(this);
    this.handleR2 = this.handleR2.bind(this);
  }

  handleVfb(event) {
    this.state.vfb = Number(event.target.value);
    this.calc();
  }

  handleOutMin(event) {
    this.state.out_min = Number(event.target.value);
    this.calc();
  }

  handleOutMax(event) {
    this.state.out_max = Number(event.target.value);
    this.calc();
  }

  handleADCmin(event) {
    this.state.adc_min = Number(event.target.value);
    this.calc();
  }

  handleADCmax(event) {
    this.state.adc_max = Number(event.target.value);
    this.calc();
  }

  handleR2(event) {
    this.state.r2 = Number(event.target.value);
    this.calc();
  }

  calc() {
    console.log(this.state.adc_max, this.state.adc_min, this.state.out_max, this.state.out_min)
    let r3_r1 = (this.state.adc_max - this.state.adc_min) / (this.state.out_max - this.state.out_min);
    console.log(r3_r1)
    let r1 = this.state.r2 * 1000 * ((this.state.out_min-this.state.vfb) + 
      (this.state.adc_max-this.state.vfb)/r3_r1)/this.state.vfb;
    let r3 = r1 * r3_r1;
    this.setState({r1: Math.round(r1 / 1000), r3: Math.round(r3 / 1000)});
  }

  componentWillMount () {
    this.calc();
  }

  render () {
    console.log(this.state);
    return [
      <h2>Calculator</h2>,

      <Row split={4}>
        <Col slots={1} color={colors.dark}>
          <div style={{marginBottom: 5}} style={{marginBottom: 5}}>
            <span style={{width: 100, display: 'inline-block'}}>V_feedback:</span>
            <input type="text" value={this.state.vfb} size={4} onChange={this.handleVfb} />
            <span style={{marginLeft: 10, display: 'inline-block'}}>V</span>
          </div>
          <div style={{marginBottom: 5}}>
            <span style={{width: 100, display: 'inline-block'}}>V_out min:</span>
            <input type="text" value={this.state.out_min} size={4} onChange={this.handleOutMin} />
            <span style={{marginLeft: 10, display: 'inline-block'}}>V</span>
          </div>
          <div style={{marginBottom: 5}}>
            <span style={{width: 100, display: 'inline-block'}}>V_out max:</span>
            <input type="text" value={this.state.out_max} size={4} onChange={this.handleOutMax} />
            <span style={{marginLeft: 10, display: 'inline-block'}}>V</span>
          </div>
          <div style={{marginBottom: 5}}>
            <span style={{width: 100, display: 'inline-block'}}>V_set min:</span>
            <input type="text" value={this.state.adc_min} size={4} onChange={this.handleADCmin} />
            <span style={{marginLeft: 10, display: 'inline-block'}}>V</span>
          </div>
          <div style={{marginBottom: 5}}>
            <span style={{width: 100, display: 'inline-block'}}>V_set max:</span>
            <input type="text" value={this.state.adc_max} size={4} onChange={this.handleADCmax} />
            <span style={{marginLeft: 10, display: 'inline-block'}}>V</span>
          </div>
          <div style={{marginBottom: 5}}>
            <span style={{width: 100, display: 'inline-block'}}>R2:</span>
            <input type="text" value={this.state.r2} size={4} onChange={this.handleR2} />
            <span style={{marginLeft: 10, display: 'inline-block'}}>k&#8486;</span>
          </div>
          <div style={{marginBottom: 5}}>
            <span style={{width: 100, display: 'inline-block'}}>R1:</span>
            <span style={{width: 35, display: 'inline-block'}}>{this.state.r1}</span>
            <span style={{marginLeft: 10, display: 'inline-block'}}>k&#8486;</span>
          </div>
          <div style={{marginBottom: 0}}>
            <span style={{width: 100, display: 'inline-block'}}>R3:</span>
            <span style={{width: 35, display: 'inline-block'}}>{this.state.r3}</span>
            <span style={{marginLeft: 10, display: 'inline-block'}}>k&#8486;</span>
          </div>
        </Col>
        <Col slots={3} color={colors.dark}>
          <img src={'dcdc_with_vset.png'} style={{maxWidth: '100%', marginBottom: -4}}/>
        </Col>
      </Row>
    ]
  }
}
import React, { Component } from 'react';
import './header-aside.css'

export default class Header_aside extends Component {
  constructor () {
    super();
    this.state = {
      surname: {
        full: 'thium',
        current: '',
        inc: 0},
      firstInterval: 300,
      interval: 30
		};
  }

  componentDidMount() {
    this.beginSurnameAnimation();
  }
  
  beginSurnameAnimation () {
    this.setState((prevState) => {
      prevState.surname.current = '';
      prevState.surname.inc = 0;
      return prevState;
    });
    setTimeout(this.incSurname.bind(this), this.state.firstInterval);
  }

  makeUmlaut () {
    this.setState((prevState) => {
      prevState.surname.current = prevState.surname.current.substr(0, 3) + 'ü' + 
        prevState.surname.current.substr(4);
      return prevState;
    });
  }

  incSurname () {
    if(this.state.surname) {
      this.setState((prevState) => {
        prevState.surname.current = prevState.surname.full.slice(0, prevState.surname.inc++);
        return prevState;
      });
      if(this.state.surname.inc <= this.state.surname.full.length + 1)
        setTimeout(this.incSurname.bind(this), this.state.interval);
      else
        setTimeout(this.makeUmlaut.bind(this), this.state.interval * 10);
    }
  }

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
        <b>Li</b><span className='bracket'>[</span>{this.state.surname.current}<span className='bracket'>]</span>
      </a>
    )
  }
}
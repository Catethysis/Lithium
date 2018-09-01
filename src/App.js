import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header_aside from './header-aside';
import Header_content from './header-content';

class Header extends Component {
  render () {
    return [
      <Header_aside name={<span><b>Li</b>[thium]</span>} />,
      <Header_content />
    ]
  }
}

class Aside extends Component {
  render () {
    return (
      <div style={{
        width: 230,
        position: 'absolute',
        minHeight: '100%',

        backgroundColor: '#2e3e4e'
      }}>
      </div>
    )
  }
}

class Contains extends Component {
  render () {
    return [
      <Aside active="main"/>,
      <div style={{
        display: 'flex',
        marginLeft: 230,
        marginBottom: 0,
        flex: 1,
        position: 'relative',
        display: 'block',

        backgroundColor: '#ddd'
      }}>
      .
      </div>
    ]
  }
}

class App extends Component {
  render() {
    return (
      <div style={{
        width: '100vw',
      }}>
        <Header />
        <Contains />
      </div>
    );
  }
}

export default App;

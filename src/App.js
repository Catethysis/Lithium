import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import HeaderAside from './header-aside';
import HeaderContent from './header-content';
import Aside from './aside';
import Content from './content';

class App extends Component {
  render() {
    return (
      <div style={{
        width: '100vw',
      }}>
        <HeaderAside />
        <HeaderContent />
        <Aside active="main"/>
        <Content />
      </div>
    );
  }
}

export default App;
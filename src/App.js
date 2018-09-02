import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header_aside from './header-aside';
import Header_content from './header-content';
import Aside from './aside';
import Content from './content';

class Header extends Component {
  render () {
    return [
      <Header_aside />,
      <Header_content />
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
        <Aside active="main"/>
        <Content />
      </div>
    );
  }
}

export default App;
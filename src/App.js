import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import HeaderAside from './header-aside';
import HeaderContent from './header-content';
import Aside from './aside';
import Content from './content';
import ContentPageHolder from './ContentPages/ContentPageHolder';

class App extends Component {
  constructor() {
    super();
    this.state = {active: 3};
    this.asideSelect = this.asideSelect.bind(this);
  }

  asideSelect(event) {
    let newActive = event.target.dataset['id'];
    this.setState((prevState) => {
      prevState.active = newActive;
      return prevState;
    });
    window.history.pushState({}, null, newActive);
  }

  render() {
    return (
      <div style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#333'
      }}>
        <HeaderAside />
        <HeaderContent />
        <Aside active={this.state.active} onSelect={this.asideSelect}/>
        <Content>
          <ContentPageHolder page={this.state.active} />
        </Content>
      </div>
    );
  }
}

export default App;
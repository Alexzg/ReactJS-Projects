import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SocialCard } from './components/socialCard.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Social Card</h1>
        </header>
        <SocialCard />
      </div>
    );
  }
}

export default App;

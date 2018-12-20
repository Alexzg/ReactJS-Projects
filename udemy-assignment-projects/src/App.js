import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import Assignment from './assignment1/App'
import Assignment from './assignment2/App'

class App extends Component {
  render() {
    return (
      <div className="App">
	  <Assignment />
      </div>
    );
  }
}

export default App;

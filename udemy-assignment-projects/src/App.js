import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import Assignment from './assignment1/App';
//import Assignment from './assignment2/App';
//import Assignment from './assignment3/App';

import Assignment from './assignment4/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './assignment4/store/reducer';
const store = createStore(reducer);

class App extends Component {
  render() {
    return (
	<Provider store={store}>
      <div className="App">
		<Assignment />
      </div>
	</Provider>
    );
  }
}

export default App;

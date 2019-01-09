import React, { Component } from 'react';
import './App.css';
import ShowExercise from './components/ShowExercise/ShowExercise';

import { BrowserRouter } from 'react-router-dom';
import RouterApp from './components/RouterApp/RouterApp';

class App extends Component {
	state = {
		showExercise: false,
	}
	
	handleShowExerciseBtn = () => {
		this.setState(prevState => ({showExercise: !prevState.showExercise}));
	}
	
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<button onClick={this.handleShowExerciseBtn}>Exercise</button>
					<ShowExercise
						show={this.state.showExercise}/>
					<RouterApp />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;

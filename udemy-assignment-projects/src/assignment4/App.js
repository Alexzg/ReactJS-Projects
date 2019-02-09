import React, { Component } from 'react';

import './App.css';
import ShowExercise from './components/ShowExercise/ShowExercise';

import Counter from './containers/Counter/Counter';

class App extends Component {
	state = {
		showExercise: false,
	}
	
	handleShowExerciseBtn = () => {
		this.setState(prevState => ({showExercise: !prevState.showExercise}));
	}
	
	render() {
		return (
			<div className='App'>
				<button onClick={this.handleShowExerciseBtn}>Exercise</button>
				<ShowExercise
					show={this.state.showExercise}/>
				
				<Counter />
			</div>
		);
	}
}

export default App;

import React from 'react';

const showExercise = (props) => {
	let code = (
		<ol style={{textAlign: 'left'}}>
          <li>Redux state, reducer and actions are used</li>
          <li>Add functionality to the app</li>
          <li>Bonus: Counter operations change using variables, not hard-coded numbers</li>
        </ol>
	);
	if (!props.show) {
		code = null;
	}
	return code
}

export default showExercise;
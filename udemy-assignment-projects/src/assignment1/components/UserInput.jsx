import React from 'react';

const UserInput = (props) => {
	return(
		<div>
			<input type = 'text' 
				onChange = {props.OnChange} 
				value = {props.Value} />
		</div>
	)
};

export default UserInput;
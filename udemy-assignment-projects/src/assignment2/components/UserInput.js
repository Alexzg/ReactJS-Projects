import React from 'react';

const UserInput = (props) => {
	return (
		<input type='text' 
			onChange = {props.OnChange}
			value = {props.Value}/>
	)
};

export default UserInput;
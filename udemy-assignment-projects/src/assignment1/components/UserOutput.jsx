import React from 'react';

const UserOutput = (props) => {
	const style = {
		fontSize: '20px',
		color: 'orange',
	}
	
	return(
		<div>
			<p style={style}>
				{props.text1}
			</p>
			<p>
				{props.text2}
			</p>
		</div>
	)
};

export default UserOutput;
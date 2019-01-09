import React from 'react';
import { withRouter } from 'react-router-dom';

import './Course.css';

const course = (props) => {
	console.log(props)
	
	let title=props.title;
	let id=props.id;
	if (!props.id) {
		title=props.match.params.title;
		id=props.match.params.id
	}
	
	return (
		<div className='articles'>
			<h2>Title: {title}</h2>
			<h2>ID: {id}</h2>
		</div>
	
		)
}

export default withRouter(course);
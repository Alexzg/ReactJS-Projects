import React, { Component } from 'react';

import { Link, Route} from 'react-router-dom';

import Course from '../../../components/Course/Course';

import './Courses.css';

class Courses extends Component {
	state = {
		courses: [
			{id: 1, title: 'Political Science'},
			{id: 2, title: 'Social Policy'},
			{id: 3, title: 'Mechanical Entropy'},
		]
	}
	render() {
		return(
			<div>
				{
					this.state.courses.map(course => {
					return (
						<Link key={course.id} to={this.props.match.url + '/' + course.id + '/' + course.title}>
							<Course 
								id={course.id}
								title={course.title}/> 
						</Link>
					)})
				}
			</div>
		)
	}
}

export default Courses;
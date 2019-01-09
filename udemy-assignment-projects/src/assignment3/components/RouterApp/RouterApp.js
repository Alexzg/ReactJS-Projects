import React, { Component } from 'react';

import './RouterApp.css';

import { NavLink, Route, Redirect, Switch} from 'react-router-dom';

import Menu from '../../containers/pages/Menu/Menu';
import Courses from '../../containers/pages/Courses/Courses';
import Users from '../../containers/pages/Users/Users';
import Error from '../../containers/pages/Error/Error';

import Course from '../../components/Course/Course';

class routerApp extends Component {
	render() {
		return (
			<div>
				<header><nav><ul>
					<li><NavLink to='/'>Menu</NavLink></li>
					<li><NavLink to={{pathname:'/courses'}}>Courses</NavLink></li>
					<li><NavLink to={{pathname:'/users'}}>Users</NavLink></li>
				</ul></nav></header>
				<h1>ROUTER App</h1>
				<Switch>
					<Route path='/' exact component={Menu}/>
					<Route path='/courses' exact component={Courses}/>
					<Route path='/users' exact component={Users}/>
					<Redirect from='/all-courses' to='/courses'/>
					<Route path='/courses/:id/:title' exact component={Course}/>
					<Route path='/error' exact component={Error}/>
					<Redirect from='/' to='/error'/>
				</Switch>
			</div>
		)
	}
}

export default routerApp;
import React from 'react';

import './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const sideDrawer = (props) => {
	let attachedClasses = ['SideDrawer', 'Close'].join(' ');
	if (props.backdropShow) {
		attachedClasses = ['SideDrawer', 'Open'].join(' ');
	}
	
	return(
		<Aux>
			<Backdrop 
				show={props.backdropShow}
				OnClick={props.OnClick}/>
			<div className={attachedClasses}>
				<div className='LogoSideDrawer'>
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Aux>
	);
};

export default sideDrawer;
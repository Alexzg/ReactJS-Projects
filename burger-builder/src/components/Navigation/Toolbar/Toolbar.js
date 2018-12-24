import React from 'react';

import './Toolbar.css';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import MenuBtn from '../MenuBtn/MenuBtn';

const toolbar = (props) => (
	<header className='Toolbar'>
		<MenuBtn 
			OnClick={props.OnClick}/>
		<div className='LogoToolbar'>
			<Logo />
		</div>
		<nav className='DesktopOnly'>
			<NavigationItems />
		</nav>
	</header>
);

export default toolbar;
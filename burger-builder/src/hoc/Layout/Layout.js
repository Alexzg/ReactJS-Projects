import React, { Component } from 'react';

import Aux from '../Auxiliary/Auxiliary';
import './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
	state = {
		showSideDrawer: false,
	}
	
	sideDrawerClosedHandler = () => {
		this.setState({showSideDrawer: false});
	}
	
	sideDrawerOpenHandler = () => {
		this.setState( (prevState) => {
			return {showSideDrawer: !prevState.showSideDrawer};
		});
	}
	
	render(){
		return(
			<Aux>
				<Toolbar 
					showSideDrawer={this.showSideDrawer}
					OnClick={this.sideDrawerOpenHandler}/>
				<SideDrawer 
					OnClick={this.sideDrawerClosedHandler}
					backdropShow={this.state.showSideDrawer}/>
				<main className='Content'>
					{this.props.children}
				</main>
			</Aux>
		)
	}
};

export default Layout;
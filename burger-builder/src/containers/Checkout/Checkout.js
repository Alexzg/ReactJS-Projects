import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
	state = {
		ingredients: null,
		totalPrice: 0,
	}
	
	componentWillMount() {
		const queryParams = new URLSearchParams(this.props.location.search);
		const ingredients = {};
		let totalPrice = 0;
		for (let params of queryParams.entries()){
			// ['salad', '1']
			if (params[0] === 'price'){
				totalPrice = params[1];
			} else {
				ingredients[params[0]] = +params[1]; //+ makes it a number
			}
		}
		this.setState({
			ingredients: ingredients,
			totalPrice: totalPrice});
		
	}
	
	
	purchaseCancelHandler = () => {
		this.props.history.goBack();
	}
	
	purchaseCheckoutHandler = () => {
		this.props.history.replace('/checkout/contact-data');
	}
	
	render() {
		console.log(this.props);
		return(
			<div>
				<h1 style={{textAlign: 'center'}}>Checkout</h1>
				<CheckoutSummary 
					purchaseCancel={this.purchaseCancelHandler}
					purchaseCheckout={this.purchaseCheckoutHandler}
					ingredients={this.state.ingredients}/>
				<Route 
					path={this.props.match.path + '/contact-data'}
					render={(props) => (
						<ContactData 
							ingredients={this.state.ingredients}
							totalPrice={this.state.totalPrice}
							{...props}/>)} />
			</div>
		)
	}
}

export default Checkout;
import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients)
		.map(ingKey => {
			return (
			<li key={ingKey}>
				<span style={{textTransform: 'capitalize'}}>
					{ingKey}
				</span>
					: {props.ingredients[ingKey]}
			</li>)
		});
	return (
		<Aux>
			<h3>Order Summary</h3>
			<p>Your burger has the following ingredients:</p>
			<ul>
				{ingredientSummary}
			</ul>
			<p>Continue to Checkout?</p>
			<Button 
				btnClass='Success'
				OnClick={props.checkout}>
					Purchase</Button>
			<Button 
				btnClass='Danger'
				OnClick={props.modalClose}>
					Cancel</Button>
		</Aux>
	);	
};

export default orderSummary;
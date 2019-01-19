import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import './CheckoutSummary.css';

const checkoutSummary = (props) => {
	return(
		<div className='CheckoutSummary'>
			<div style={{width: '100%', margin: 'auto'}}>
				<Burger ingredients={props.ingredients} />
			</div>
			<Button 
				btnClass='Danger'
				OnClick={props.purchaseCancel}>CANCEL</Button>
			<Button 
				btnClass='Success'
				OnClick={props.purchaseCheckout}>CONTINUE</Button>
		</div>
	)
}
	
	export default checkoutSummary;
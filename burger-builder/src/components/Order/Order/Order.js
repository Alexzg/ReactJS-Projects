import React from 'react';

import './Order.css';

const order = (props) => {
	const ingredients = [];
	for (let ingName in props.ingredients){
		ingredients.push({
			name: ingName, 
			amount: props.ingredients[ingName]
		})
	}
	const ingArray = ingredients.map(ing => {
		return(
			<span 
				key={ing.id}
				style= {{
					textTransform: 'capitalize', 
					display: 'block', 
					border: '1px solid lightgrey',
					color: 'black'
					}}>
				{ing.name}: {ing.amount}
			</span>)
	})
	return (
		<div className='Order'>
			<p style={{color: 'green'}}>Ingredients:</p>
			<p>{ingArray}</p>
			<p><strong>Price: {props.price.toFixed(2)}</strong></p>
		</div>
	)
}

export default order;
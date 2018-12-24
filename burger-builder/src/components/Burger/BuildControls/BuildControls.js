import React from 'react';

import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
	{ label: 'Salad', type: 'salad' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Cheese', type: 'cheese' },
	{ label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
	<div className='BuildControls'>
		<p>Total Price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
		{controls.map(ctrl => (
			<BuildControl 
				key={ctrl.label} 
				label={ctrl.label} 
				addClick={() => props.ingredientAdd(ctrl.type)}
				removeClick={() => props.ingredientRemove(ctrl.type)}
				disable={props.disabledBtnInfo[ctrl.type]}/>
		))}
		<button 
			className='OrderButton'
			disabled={!props.purchasable}
			onClick={props.OnClick}>
				ORDER
		</button>
	</div>
);

export default buildControls;
import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7,
}

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0,
		},
		totalPrice: 0,
		purchasable: false,
		purchasing: false,
	}
	
	updatePurchaseState = (ingredients) => {
		const sum = Object.keys(ingredients)
			.map(ingKey => {
				return ingredients[ingKey]
			})
			.reduce((sum, el) => {
				return sum + el
			}, 0);
		this.setState({purchasable: sum > 0});
	}
	
	addIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCounted = oldCount + 1;
		const updatedIngredients = {...this.state.ingredients};
		updatedIngredients[type] = updatedCounted;
		
		const priceAddition = INGREDIENTS_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;
		
		this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
		this.updatePurchaseState(updatedIngredients);
	}
	
	removeIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		if (oldCount <= 0) {return;}
		const updatedCounted = oldCount - 1;
		const updatedIngredients = {...this.state.ingredients};
		updatedIngredients[type] = updatedCounted;
		
		const priceDeduction = INGREDIENTS_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;
		
		this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
		this.updatePurchaseState(updatedIngredients);
	}
	
	purchaseHandler = () => {
		this.setState({purchasing: true});
	}
	
	purchaseCancelHandler = () => {
		this.setState({purchasing: false});
	}
	
	purchaseCheckoutHandler = () => {
		alert('You continue');
	}
	
	render() {
		const disabledInfo = {
			...this.state.ingredients
		};
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0
		}
		return(
			<Aux>
				<Modal 
					show={this.state.purchasing}
					modalClose={this.purchaseCancelHandler}>
					<OrderSummary 
						ingredients={this.state.ingredients}
						modalClose={this.purchaseCancelHandler}
						checkout={this.purchaseCheckoutHandler}/>
				</Modal>
				<Burger ingredients={this.state.ingredients}/>
				<BuildControls 
					ingredientAdd={this.addIngredientHandler}
					ingredientRemove={this.removeIngredientHandler}
					disabledBtnInfo={disabledInfo}
					totalPrice={this.state.totalPrice}
					purchasable={this.state.purchasable}
					OnClick={this.purchaseHandler}/>
			</Aux>
		);
	};
}

export default BurgerBuilder;
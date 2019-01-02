import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axiosOrders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENTS_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7,
}

class BurgerBuilder extends Component {
	state = {
		ingredients: null,
		totalPrice: 0,
		purchasable: false,
		purchasing: false,
		loadingPage: false,
		error: false,
	}
	
	componentDidMount () {
		axios.get('/ingredients.json')
			.then(response => {
				this.setState({ingredients: response.data});
			})
			.catch(error => {
				this.setState({error: true})
			});
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
		this.setState({loadingPage: true});
		const order = {
			ingredients: this.state.ingredients,
			price: this.state.totalPrice,
			customer: {
				name: 'Alex',
				address: {
					street: 'teststreet 3',
					zipCode: '12345',
					country: 'Australia'
				},
				email: 'kjaned@gmail.com',
			},
			deliveryMothod: 'courier'
		};
		axios.post('/orders.json', order)
			.then(response => {
				this.setState({loadingPage: false, purchasing: false});
			})
			.catch(error => {
				this.setState({loadingPage: true, purchasing: false});
			});
	}
	
	render() {
		const disabledInfo = {
			...this.state.ingredients
		};
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0
		}
		let orderSummaryModal = null;
		let burger = this.state.error ? <p>'An error occured :-('</p> : <Spinner />;
		if (this.state.ingredients) {
			burger = ( 
				<Aux>
					<Burger ingredients={this.state.ingredients}/>
					<BuildControls 
						ingredientAdd={this.addIngredientHandler}
						ingredientRemove={this.removeIngredientHandler}
						disabledBtnInfo={disabledInfo}
						totalPrice={this.state.totalPrice}
						purchasable={this.state.purchasable}
						OnClick={this.purchaseHandler}/> );
				</Aux> );
				orderSummaryModal = <OrderSummary 
							ingredients={this.state.ingredients}
							modalClose={this.purchaseCancelHandler}
							checkout={this.purchaseCheckoutHandler}
							totalPrice={this.state.totalPrice}/>;
				if (this.state.loadingPage) {
					orderSummaryModal = <Spinner />;
				}
		}
		return(
			<Aux>
				<Modal 
					show={this.state.purchasing}
					modalClose={this.purchaseCancelHandler}>
					{ orderSummaryModal }
				</Modal>
				{ burger }
			</Aux>
		);
	};
}

export default withErrorHandler(BurgerBuilder, axios);
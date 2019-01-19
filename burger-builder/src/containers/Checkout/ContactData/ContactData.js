import React, { Component } from 'react';

import axios from '../../../axiosOrders';

import './ContactData.css';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
	state = {
		name: '',
		email: '',
		address: {
			street: '',
			postalCode: ''
		},
		loadingPage: false
	}
	
	orderHandler = () => {
		this.setState({loadingPage: true});
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.totalPrice,
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
				this.setState({loadingPage: false});
				this.props.history.push('/');
			})
			.catch(error => {
				this.setState({loadingPage: false});
			});
	}
	
	render(){
		let form = (
			<form>
					<input type='text' name='name' placeholder='Your name' />
					<input type='text' name='email' placeholder='Your email' />
					<input type='text' name='address' placeholder='Your address' />
					<Button 
						btnClass='Success'
						OnClick={this.orderHandler}>ORDER</Button>
				</form>
			);
		if (this.state.loadingPage) {
			form = <Spinner />;
		}
		return(
			<div className='ContactData'>
				<h4>Enter DATA</h4>
				{ form }
			</div>
		)
	}
}

export default ContactData;
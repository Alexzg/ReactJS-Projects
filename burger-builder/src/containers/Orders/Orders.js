import React, { Component } from 'react';

import Order from '../../components/Order/Order/Order';
import axios from '../../axiosOrders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
	state = {
		orders: [],
		loadingPage: true,
	}
	
	componentDidMount() {
		axios.get('/orders.json')
			.then(res => {
				const ordersArr = [];
				for (let key in res.data){
					ordersArr.push({
						id: key,
						...res.data[key]
						});
				}
				this.setState({
					loadingPage: false,
					orders: ordersArr
					});
					}).catch(err => {console.log(err);this.setState({loadingPage: false})});
	}
	
	render() {
		return(
			<div>
				{this.state.orders.map(order => (
					<Order 
						key={order.id}
						ingredients={order.ingredients}
						price={+order.price}/>
				))}
			</div>
		)
	}
}

export default withErrorHandler(Orders, axios);
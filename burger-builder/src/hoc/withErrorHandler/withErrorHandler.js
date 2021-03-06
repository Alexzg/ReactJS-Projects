import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary/Auxiliary';

const withErrorhandler = (WrappedComponent, axios) => {
	return class extends Component {
		state = {
			error: null,
		}
		
		componentWillMount () {
			this.reqInterceptor = axios.interceptors.request.use(req => {
				this.setState({error: null});
				return req;
			});
			this.resInterceptor = axios.interceptors.response.use(res => res, error => {
				this.setState({error: error});
			});
		}
		
		componentWllUnmount () {
			axios.interceptors.request.eject(this.reqInterceptor);
			axios.interceptors.response.eject(this.resInterceptor);
		}
		
		clickHandler = () => {
			this.setState({error: null});
		}
		
		render(){
			return (
				<Aux>
					<Modal 
						show={this.state.error}
						modalClose={this.clickHandler}>
						{this.state.error ? this.state.error.message : null}
					</Modal>
					<WrappedComponent {...this.props} />
				</Aux>
			);
		}
	}
}

export default withErrorhandler;
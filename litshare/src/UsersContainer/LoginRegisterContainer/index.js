import React, { Component } from 'react';
import LoginContainer from './LoginContainer';
import RegisterContainer from './RegisterContainer';

class LoginRegisterContainer extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn: false,
			registered: true,
		}
	}

	toggleRegistered = (e) => {
		this.setState({
			registered: !this.state.registered
		})
	}

	render() {
		return(
			<div>
				<h1>toggle between forms here</h1>
				{this.state.registered ? 
					<LoginContainer /> : 
					<RegisterContainer />
				}
				<button onClick={this.toggleRegistered}>{this.state.registered ? "Register" : "Login" }</button>
			</div>
		)
	}
}

export default LoginRegisterContainer
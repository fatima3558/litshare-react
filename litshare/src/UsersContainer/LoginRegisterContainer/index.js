import React, { Component } from 'react';
import LoginContainer from './LoginContainer';
import RegisterContainer from './RegisterContainer';

class LoginRegisterContainer extends Component {
	constructor() {
		super()
		this.state = {
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
				<h1>Welcome to Litshare!</h1>
				<h4>Share the Lit, Share the Love &hearts;</h4>
				}
				<br/>
				{this.state.registered ? 
					<LoginContainer 
						loggedIn={this.props.loggedIn}
						toggleLogin={this.props.toggleLogin}
					/> : 
					<RegisterContainer 
						toggleLogin={this.props.toggleLogin}
					/>
				}
			</div>
		)
	}
}

export default LoginRegisterContainer
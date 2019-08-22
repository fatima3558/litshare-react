import React, { Component } from 'react';
import LoginContainer from './LoginContainer';
import RegisterContainer from './RegisterContainer';

class LoginRegisterContainer extends Component {
	constructor() {
		super()
		this.state = {
		}
	}

	render() {
		return(
			<div>
				<h1>Welcome to Litshare!</h1>
				<h4>Share the Lit, Share the Love &hearts;</h4>
				}
				<br/>
				{this.props.registered ? 
					<LoginContainer 
						loggedIn={this.props.loggedIn}
						toggleLogin={this.props.toggleLogin}
						registered={this.props.registered}
					/> : 
					<RegisterContainer 
						toggleLogin={this.props.toggleLogin}
						registered={this.props.registered}
					/>
				}
			</div>
		)
	}
}

export default LoginRegisterContainer
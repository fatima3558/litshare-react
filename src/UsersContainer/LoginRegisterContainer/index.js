import React, { Component } from 'react';
import LoginContainer from './LoginContainer';
import RegisterContainer from './RegisterContainer';
import { Grid, Input, Button, Form } from 'semantic-ui-react';

class LoginRegisterContainer extends Component {
	constructor() {
		super()
		this.state = {
		}
	}

	render() {
		return(
			<div>
				<h1>Welcome to LITSHARE!</h1>
				<h4>Share the Lit, Share the Love &hearts;</h4>
				
				<br/>
				{this.props.registered ? 
					<LoginContainer 
						{...this.props}
						loggedIn={this.props.loggedIn}
						registered={this.props.registered}
					/> : 
					<RegisterContainer 
						{...this.props}
						registered={this.props.registered}
					/>
				}
			</div>
		)
	}
}

export default LoginRegisterContainer
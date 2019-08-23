import React, { Component } from 'react';
import LoginRegisterContainer from './LoginRegisterContainer';

class UsersContainer extends Component {
	constructor() {
		super()
		this.state = {
			registered: true,

		}
	}

	handleClick = (e) => {
		this.props.toggleLogin()
	}

	toggleRegistered = (e) => {
		this.setState({
			registered: !this.state.registered
		})
	}

	render() {
		return(
			<div>
				<h1>Users Container to hold all 'users' routes</h1>
				{this.props.loggedIn ? 
					<button onClick={this.handleClick}>Log Out</button> :
					<div>
						<button 
							onClick={this.toggleRegistered}>{this.state.registered ? "Register" : "Login" }
						</button>
						<LoginRegisterContainer 
							{...this.props}
							loggedIn={this.props.loggedIn}
							registered={this.state.registered}
						/>
					</div>
				}
			</div>
		)
	}
}

export default UsersContainer
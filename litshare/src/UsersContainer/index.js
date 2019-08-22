import React, { Component } from 'react';
import LoginRegisterContainer from './LoginRegisterContainer';

class UsersContainer extends Component {
	constructor() {
		super()
		this.state = {

		}
	}
	
	handleClick = (e) => {
		this.props.toggleLogin()
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
							loggedIn={this.props.loggedIn}
							toggleLogin={this.props.toggleLogin}
						/>
					</div>
				}
			</div>
		)
	}
}

export default UsersContainer
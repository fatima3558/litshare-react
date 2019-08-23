import React, { Component } from 'react';
import LoginRegisterContainer from './LoginRegisterContainer';
import UserInfoContainer from './UserInfoContainer'

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
		console.log("this is propsin UsersContainer below:");
		console.log(this.props);
	// 	console.log("this is statein UsersContainer below:");
	// 	console.log(this.state);
		return(
			<div>
				<h1>You are logged in as: {this.props.username}</h1>
					<div>
						{this.props.loggedIn ? 
							<div>
								<UserInfoContainer 
									{...this.props}
								/> 
							</div> :
							<div>
								<button 
									onClick={this.toggleRegistered}>{this.state.registered ? "Register" : "Login" }
								</button>
								<LoginRegisterContainer 
									{...this.props}
									registered={this.state.registered}
								/>
							</div>
						}
					</div>
			</div>
		)
	}
}

export default UsersContainer
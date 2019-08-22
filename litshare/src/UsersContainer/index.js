import React, { Component } from 'react';
import LoginRegisterContainer from './LoginRegisterContainer';

class UsersContainer extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn: false,
			registered: true,

		}
	}

	render() {
		return(
			<div>
				<h1>Users Container to hold all 'users' routes</h1>
				<LoginRegisterContainer />
			</div>
		)
	}
}

export default UsersContainer
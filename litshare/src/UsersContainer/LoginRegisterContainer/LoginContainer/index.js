import React, { Component } from 'react';

class LoginContainer extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: ''
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}

	render() {
		return(
			<form>
				<h2>Log In</h2>
				<input 
					type="text" 
					name="username" 
					placeholder="Username"
					onChange={this.handleChange}
				>
				</input>
				<br/>
				<input 
					type="password" 
					name="password" 
					placeholder="Password"
					onChange={this.handleChange}
				>
				</input>
				<br/>
				<button>Log In</button>
			</form>
		)
	}
}

export default LoginContainer
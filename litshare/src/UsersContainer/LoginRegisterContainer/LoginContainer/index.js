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

	handleSubmit = (e) => {
		e.preventDefault()
		console.log(this.state)
		this.setState({
			username: '',
			password: ''
		})
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<h2>Log In</h2>
				<input 
					type="text" 
					name="username" 
					placeholder="Username"
					value={this.state.username}
					onChange={this.handleChange}
				>
				</input>
				<br/>
				<input 
					type="password" 
					name="password" 
					placeholder="Password"
					value={this.state.password}
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
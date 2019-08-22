import React, { Component } from 'react';

class RegisterContainer extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			email: '',
			password: '',
			bio: '',
			zipcode: ''
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
			email: '',
			password: '',
			bio: '',
			zipcode: ''
		})
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<h2>Register</h2>
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
					type="text" 
					name="email" 
					placeholder="Email"
					value={this.state.email}
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
				<textarea 
					name="bio"
					placeholder="Tell us about yourself!"
					value={this.state.bio}
					onChange={this.handleChange}
				/>
				<br/>
				<input
					type="text" 
					name="zipcode" 
					placeholder="Zip Code"
					value={this.state.zipcode}
					onChange={this.handleChange}
				>
				</input>
				<br/>
				<button>Register</button>
			</form>
		)
	}
}

export default RegisterContainer
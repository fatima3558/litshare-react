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

	render() {
		return(
			<div>
				<form>
					<h2>Register</h2>
					<input 
						type="text" 
						name="username" 
						placeholder="Username"
						onChange={this.handleChange}
					>
					</input>
					<br/>
					<input 
						type="text" 
						name="email" 
						placeholder="Email"
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
					<textarea 
						name="bio"
						placeholder="Tell us about yourself!"
						onChange={this.handleChange}
					/>
				</form>
				<br/>
				<button>Register</button>
			</div>
		)
	}
}

export default RegisterContainer
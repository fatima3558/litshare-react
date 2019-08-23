import React, { Component } from 'react';

class LoginContainer extends Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: ''
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}

	handleSubmit = async (e) => {
		e.preventDefault()
		try {
			// turn state into FormData()
			const data = new FormData();
			data.append('email', this.state.email)
			data.append('password', this.state.password)
			// query the database
			const login = await fetch('http://localhost:8000/users/login', {
				credentials: 'include',
				method: 'POST',
				body: data,
				headers: {
					'enctype': 'multipart/form-data'
				}
			})


			// save response in an variable called loginResponse
			const loginResponse = await login.json()
			console.log(loginResponse);

			if(loginResponse.status.code !== 200) {
				throw Error("Resource Not Found")
			} 

			// reset state
			this.setState({
				username: '',
				password: ''
			})

			// call on props function to toggleLogin
			this.props.toggleLogin(loginResponse.data.username)

		} catch(err) {
			console.log(err);
		}
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<h2>Log In</h2>
				<input 
					type="text" 
					name="email" 
					placeholder="Email"
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
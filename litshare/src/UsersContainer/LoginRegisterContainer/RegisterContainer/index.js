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

	handleSubmit = async (e) => {
		e.preventDefault()
		try {
			// turn state into FormData()
			const newUser = new FormData();
			newUser.append('username', this.state.username)
			newUser.append('email', this.state.email)
			newUser.append('password', this.state.password)
			newUser.append('bio', this.state.bio)
			newUser.append('zipcode', this.state.zipcode)
			// query the database
			const register = await fetch('http://localhost:8000/users/register', {
				method: 'POST',
				credentials: 'include',
				body: newUser,
				headers: {
					'enctype': 'multipart/form-data'
				}
			})

			const registerResponse = await register.json()

			console.log(registerResponse);
			// save response in variable called registerResponse
			
			// reset state
			this.setState({
				username: '',
				email: '',
				password: '',
				bio: '',
				zipcode: ''
			})
			// call on props function to toggleLogin
			this.props.toggleLogin(registerResponse.data)
		    this.props.history.push('/books')
		    			
		} catch(err) {
			console.log(err);
		}
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
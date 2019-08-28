import React, { Component } from 'react';
import { Input, Button, Form } from 'semantic-ui-react'

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
			const login = await fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
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
			} else {
		    	this.props.history.push('/books')
				this.props.toggleLogin(loginResponse.data)
			}

		} catch(err) {
			console.log(err);
		}
	}

	render() {
		return(
			<Form onSubmit={this.handleSubmit}>
				<h2>Log In</h2>
				<Input 
					type="text" 
					name="email" 
					placeholder="Email"
					value={this.state.username}
					onChange={this.handleChange}
				>
				</Input>
				<br/>
				<Input 
					type="password" 
					name="password" 
					placeholder="Password"
					value={this.state.password}
					onChange={this.handleChange}
				>
				</Input>
				<br/>
				<Button>Log In</Button>
			</Form>
		)
	}
}

export default LoginContainer
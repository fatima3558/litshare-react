import React from 'react';
import { Grid, Input, Button, Form, TextArea } from 'semantic-ui-react';

class UserInfoEditContainer extends React.Component {
	constructor(props) {
		super()
		this.state = {
			username: props.user.username,
			email: props.user.email,
			bio: props.user.bio,
			zipcode: props.user.zipcode
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
			// console.log(this.props, "this is props in UserInfoEditContainer")
			console.log(this.state);
			// console.log(this.props.user.id, "user's id");
			const updatedUser = await fetch('http://localhost:8000/users/' + this.props.user.id + '/edit', {
				credentials: 'include',
				method: 'PUT',
				body: JSON.stringify(this.state),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			const updatedUserResponse = await updatedUser.json()
			console.log(updatedUserResponse, "updated user response");

			this.props.toggleEdit()

			this.props.updateLoggedInUser(updatedUserResponse.data)
		} catch(err) {
			console.log(err);
		}
	}

	render() {
		return(
			<Form onSubmit={this.handleSubmit}>
				<h1>{this.props.user.username}'s Account Information</h1>

				<p>Name:</p><br/>
				<Input 
					type='text'
					name='username'
					value={this.state.username}
					onChange={this.handleChange}
				/>

				<p>Email:</p><br/>
				<Input 
					type='text'
					name='email'
					value={this.state.email}
					onChange={this.handleChange}
				/>

				<p>Bio:</p> <br/>
				<TextArea
					style={{maxWidth: 300}}
					name='bio'
					value={this.state.bio}
					onChange={this.handleChange}
				/>

				<p>Zip Code:</p><br/>
				<Input 
					type='text'
					name='zipcode'
					value={this.props.user.zipcode}
					onChange={this.handleChange}
				/><br/>
				<Button>Submit</Button>
			</Form>
		)
	}
}

export default UserInfoEditContainer
import React from 'react';

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
			console.log(this.props, "this is props in UserInfoEditContainer")
			console.log(this.state);
			// write database query to update user here
		} catch(err) {
			console.log(err);
		}
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<h1>{this.props.user.username}'s Account Information</h1>

				<p>Name:</p><br/>
				<input 
					type='text'
					name='username'
					value={this.state.username}
					onChange={this.handleChange}
				/>

				<p>Email:</p><br/>
				<input 
					type='text'
					name='email'
					value={this.state.email}
					onChange={this.handleChange}
				/>

				<p>Bio:</p> <br/>
				<textarea 
					name='bio'
					value={this.state.bio}
					onChange={this.handleChange}
				/>

				<p>Zip Code:</p><br/>
				<input 
					type='text'
					name='zipcode'
					value={this.props.user.zipcode}
					onChange={this.handleChange}
				/><br/>
				<button>Submit</button>
			</form>
		)
	}
}

export default UserInfoEditContainer
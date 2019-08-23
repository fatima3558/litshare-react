import React from 'react';

class UserInfoEditContainer extends React.Component {
	constructor() {
		super()
		this.state = {

		}
	}

	render() {
		return(
			<form>
				<h1>{this.props.username}'s Account Information</h1>
				<h4>Name:</h4><br/>
				<input placeholder={this.props.user.username}></input>
				<h4>Email:</h4><br/>
				<input placeholder={this.props.user.email}></input>
				<h4>Bio:</h4> <br/>
				<input placeholder={this.props.user.bio}></input>
				<h4>Zip Code:</h4><br/>
				<input placeholder={this.props.user.zipcode}></input>
			</form>
		)
	}
}

export default UserInfoEditContainer
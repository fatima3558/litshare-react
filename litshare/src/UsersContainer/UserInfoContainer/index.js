import React from 'react';
import UserInfoEditContainer from './UserInfoEditContainer';
import Header from '../Header';
import { Grid, Input, Button, Form } from 'semantic-ui-react'


class UserInfoContainer extends React.Component {
	constructor() {
		super()
		this.state = {
			editing: false
		}
	}

	toggleEdit = () => {
		this.setState({
			editing: !this.state.editing
		})
	}

	deleteUser = async (e) => {
		try {
			const deletedUser = await fetch('http://localhost:8000/users/' + this.props.user.id, {
				credentials: 'include',
				method: 'delete'
			})

			const deletedUserResponse = await deletedUser.json()

			console.log(deletedUserResponse, "deleted User response");

			this.props.toggleLogin()
		} catch(err) {
			console.log(err);
		}
	}

	render() {
		return(
			<div>
				<Header {...this.props}/>
				{this.state.editing ?
					<UserInfoEditContainer {...this.props}/> :
					<div>
						<h1>{this.props.user.username}'s Account Information</h1>
						<h4>Email:</h4><br/>
						<p> {this.props.user.email}</p>
						<h4>Bio:</h4> <br/>
						<p>{this.props.user.bio}</p>
						<h4>Zip Code:</h4><br/>
						<p>{this.props.user.zipcode}</p>
					</div>
				}
				<Button onClick={this.toggleEdit}>{this.state.editing ? "Done" : "Edit Info"}</Button>
				<br/>
				<h4><span>Or</span></h4>
				<br/>
				<Button onClick={this.deleteUser}>Delete Your Account</Button>
			</div>
		)
	}
}

export default UserInfoContainer
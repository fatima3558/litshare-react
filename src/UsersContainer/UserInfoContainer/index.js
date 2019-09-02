import React from 'react';
import UserInfoEditContainer from './UserInfoEditContainer';
import Header from '../Header';
import { Grid, Input, Button, Form } from 'semantic-ui-react'
import RequestsContainer from '../../RequestsContainer'


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
			const deletedUser = await fetch(`${process.env.REACT_APP_API_URL}/users/` + this.props.user.id, {
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
				{this.props.displayedUser 
					? 
					<div>
						<h1>{this.props.displayedUser.username}'s Account Information</h1>
						<h4>Email:</h4><br/>
						<p> {this.props.displayedUser.email}</p>
						<h4>Bio:</h4> <br/>
						<p>{this.props.displayedUser.bio}</p>
						<h4>Zip Code:</h4><br/>
						<p>{this.props.displayedUser.zipcode}</p>
					</div> 
					: null
				} 


				{this.state.editing ? <UserInfoEditContainer {...this.props} toggleEdit={this.toggleEdit}/> : null}

				{!this.state.editing && !this.props.displayedUser 
					? 
					<div>
						<h1>{this.props.user.username}'s Account Information</h1>
						<h4>Email:</h4><br/>
						<p> {this.props.user.email}</p>
						<h4>Bio:</h4> <br/>
						<p>{this.props.user.bio}</p>
						<h4>Zip Code:</h4><br/>
						<p>{this.props.user.zipcode}</p>
						<Button onClick={this.toggleEdit}>Edit Info</Button>
						<br/>
						<h4><span>Or</span></h4>
						<br/>
						<Button onClick={this.deleteUser}>Delete Your Account</Button>
						<RequestsContainer loggedIn={this.props.loggedIn} user={this.props.user } />

					</div> 
					: null
				}
			</div>
		)
	}
}

export default UserInfoContainer
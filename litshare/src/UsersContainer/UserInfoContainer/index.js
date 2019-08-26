import React from 'react';
import UserInfoEditContainer from './UserInfoEditContainer';

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


				{this.state.editing ? <UserInfoEditContainer {...this.props}/> : null}

				{!this.state.editing && !this.props.displayedUser 
					? 
					<div>
						<h1>{this.props.username}'s Account Information</h1>
						<h4>Email:</h4><br/>
						<p> {this.props.user.email}</p>
						<h4>Bio:</h4> <br/>
						<p>{this.props.user.bio}</p>
						<h4>Zip Code:</h4><br/>
						<p>{this.props.user.zipcode}</p>
						<button onClick={this.toggleEdit}>{this.state.editing ? "Done" : "Edit Info"}</button>
						<h4><span>Or </span></h4>
						<button onClick={this.deleteUser}>Delete Your Account</button>
					</div> 
					: null
				}
				
			</div>
		)
	}
}

export default UserInfoContainer
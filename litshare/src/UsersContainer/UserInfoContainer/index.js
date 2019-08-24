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

	render() {
		return(
			<div>
				{this.state.editing ? 
					<UserInfoEditContainer {...this.props}/> :
					<div>
						<h1>{this.props.username}'s Account Information</h1>
						<h4>Email:</h4><br/>
						<p> {this.props.user.email}</p>
						<h4>Bio:</h4> <br/>
						<p>{this.props.user.bio}</p>
						<h4>Zip Code:</h4><br/>
						<p>{this.props.user.zipcode}</p>
					</div>
				}
				<button onClick={this.toggleEdit}>{this.state.editing ? "Cancel" : "Edit Info"}</button>
			</div>
		)
	}
}

export default UserInfoContainer
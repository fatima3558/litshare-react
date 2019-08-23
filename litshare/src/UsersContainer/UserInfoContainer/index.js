import React from 'react';

class UserInfoContainer extends React.Component {
	constructor() {
		super()
		this.state = {

		}
	}

	render() {
		console.log("this is UserInfoContainer");
		return(
			<div>
				<h1>{this.props.username}</h1>
			</div>
		)
	}
}

export default UserInfoContainer
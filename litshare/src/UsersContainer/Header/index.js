import React from 'react';
import { Grid, Input, Button, Form } from 'semantic-ui-react'

class Header extends React.Component {
	constructor() {
		super()
	}

	handleClick = () => {
		this.props.history.push('/books')
	}

	render(){
		return (
			<Grid>
				<Grid.Column width={4}>
					<Button onClick={this.handleClick}>Go to Books</Button>
				</Grid.Column>
				<Grid.Column width={8}>
					<h1 align='middle'> LITSHARE </h1>
				</Grid.Column>
					{this.props.loggedIn ? 
						<Grid.Column width={4} align='right'>
							<a onClick={this.showUserInfo}>{this.props.username}</a><br/>
							<button onClick={this.props.toggleLogin}>Log Out</button> 
						</Grid.Column> :
						null
					}
			</Grid>
		)
	}
}

export default Header
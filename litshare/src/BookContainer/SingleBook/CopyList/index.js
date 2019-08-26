import React from 'react'
import { Divider, Grid, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class CopyList extends React.Component{
	constructor(){
		super()

	}

	showUser = (userId) => {
		this.props.displayUser(userId)
		this.props.history.push('/users')
	}

	render(){
		const singlecopy = this.props.copies.map(copy => {
			return (
				<Grid.Row key={copy.id} align='middle'>
					<p><a onClick={this.showUser.bind(null, copy.owner_id)}> {copy.owner_id.username}</a> <br/>condition: {copy.condition}<br/>edition: {copy.edition}<br/>price: {copy.price}<br/>rental time: {copy.rental_time} days</p><br/>
					<Button onClick={this.props.deleteOneCopy.bind(null, copy.id)}>Delete</Button>
					<Button onClick={this.props.editCopy.bind(null, copy)}>Edit</Button>
					<Button>REQUEST</Button>
				</Grid.Row>
			)
		})
		// the buttons above shoule be able to toggle according to who is logged in 
		return(
			<div>
				<Grid>
					<h4>these guys have this book! hit them up</h4>
					{singlecopy}
				</Grid>
			</div>
		)
	}
}

export default CopyList
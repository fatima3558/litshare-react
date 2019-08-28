import React from 'react'
import { Divider, Card, Button } from 'semantic-ui-react'
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
		// console.log(this.props,"<-----props in copy list");
		const singlecopy = this.props.copies.map((copy,i) => {
			const title = 'copy#'+{i}
			return (
				<Card key={copy.id} >
					<Card.Content>
						<Card.Header>
							<a onClick={this.showUser.bind(null, copy.owner_id)}> {copy.owner_id.username}</a>
						</Card.Header>
						<Card.Description>
							<p> condition: {copy.condition}<br/>edition: {copy.edition}<br/>price: {copy.price}<br/>rental time: {copy.rental_time} days</p>
						<Card.Content extra>
							<Button size='mini' onClick={this.props.deleteOneCopy.bind(null, copy.id)}>Delete</Button>
							<Button size='mini' onClick={this.props.editCopy.bind(null, copy)}>Edit</Button>
							<Button size='mini' >REQUEST</Button>
						</Card.Content>
						</Card.Description>
					</Card.Content>
				</Card>
			)
		})
		// the buttons above shoule be able to toggle according to who is logged in 
		return(
			<div>
				<h4>these guys have this book! hit them up</h4>
				{singlecopy}
			</div>
		)
	}
}

export default CopyList
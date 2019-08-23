import React from 'react'
import { Divider, Grid, Button } from 'semantic-ui-react'

class CopyList extends React.Component {
	// /
	constructor(){
		super()
		this.state={
			copies:[]
		}
	}

	componentDidMount(){
		this.getCopy()
	}

	getCopy = async () => {
		const url = `http://localhost:8000/books/${this.props.bookid}/copy`
		const getCopiesResponse = await fetch(url,{
			method: 'GET',
        	credentials: 'include'
		})

		console.log(getCopiesResponse);
	    const prasedResponse = await getCopiesResponse.json()
	    console.log(prasedResponse,"<00000000parsedresposne ");

	    this.setState({
	    	copies: prasedResponse.data
	    })
	}

	render(){
		// console.log(this.state,"<----state in copy list ");
		const singlecopy = this.state.copies.map(copy => {
			return (
				<Grid.Row key={copy.id} align='middle'>
					<p><a>{copy.owner_id.username}</a> <br/>condition: {copy.condition}<br/>edition: {copy.edition}<br/>price: {copy.price}</p><br/>
					<Button>Delete</Button>
					<Button>Edit</Button>
					<Button>REQUEST</Button>
				</Grid.Row>
			)
		})
		// the buttons above shoule be able to toggle according to who is logged in 
		return(
			<Grid>
			<h4>these guys have this book! hit them up</h4>
			{singlecopy}
			</Grid>
		)
	}

}

export default CopyList
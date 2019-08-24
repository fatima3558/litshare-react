import React from 'react'
import { Form, Input, Button } from 'semantic-ui-react'

class EditCopy extends React.Component{
	constructor(){
		super()
		this.state={
			edition:'' ,
			condition:'',
			price: "",
			rental_time:''
		}
	}

	handleChange=(e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.displayEditCopy()
	}

	render(){
		return(

			<div>
				edit copy from
				<Form onSubmit={this.handleSubmit}>
					Edition: <Input type='text' name='edition' value={this.state.edition} palceholder='somethin' onChange={this.handleChange} /> <br/>
					Condition: <Input type='text' name='condition' value={this.state.condition} palceholder='somethin' onChange={this.handleChange} /> <br/>
					Price: <Input type='number' name='price' value={this.state.price} palceholder='somethin' onChange={this.handleChange} /> <br/>
					Rental time: <Input type='number' name='rental_time' value={this.state.rental_time} palceholder='somethin' onChange={this.handleChange} /> <br/>
					<Button>Submit</Button>
				</Form>
			</div>

		)
	}
}

export default EditCopy
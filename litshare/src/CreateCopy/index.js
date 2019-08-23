import React from 'react'
import { Form, Button, Input, Image } from 'semantic-ui-react'


class CreateCopy extends React.Component {
	constructor(){
		super()
		this.state = {
			edition:'',
			condition:'',
			price: '',
			rentalTime: '',
		}
	}

	handleChange = (e) => {
		// there shoule be a prop that is the book id 
		// current user should already be passed down through flask 
	}

	render(){
		return(
			<div>
			<Form>
				edition: <Input type='text' name='edition' value = {this.state.edition} onChange={this.handleChange} placeholder='edition' /><br/>
				condition: <Input type='text' name='condition' value = {this.state.condition} onChange={this.handleChange} placeholder='condition' /><br/>
				price: <Input type='number' name='price' value = {this.state.price} onChange={this.handleChange} placeholder='price' /><br/>
				rentalTime: <Input type='text'name='rentalTime' value = {this.state.rentalTime} onChange={this.handleChange} placeholder='rentalTime' /><br/>
				<Button>upload</Button>
			</Form>
			</div>

		)
	}
}

export default CreateCopy
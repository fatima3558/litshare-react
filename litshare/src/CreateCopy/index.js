import React from 'react'
import { Form, Button, Input, Image } from 'semantic-ui-react'


class CreateCopy extends React.Component {
	constructor(){
		super()
		this.state = {
			edition:'',
			condition:'',
			price: '',
			rental_time: '',
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
		// there shoule be a prop that is the book id 
		// current user should already be passed down through flask 
	}

	handleSubmit = (e) => {
		e.preventDefault()
		const addCopyCall = this.props.addCopy({...this.state})

	    addCopyCall.then((data) => {
	      // console.log(data)
	        if(data.status.message === "success"){
	          // this.props.history.push('/profile')
	          console.log('success????');
	        } else {
	          console.log(data, ' this should have an error message? How could you display that on the screen')
	        }
	    })
	    this.props.displayCreateCopy()
	}

	render(){
		return(
			<div>
			<Form onSubmit = {this.handleSubmit}>
				edition: <Input type='text' name='edition' value={this.state.edition} onChange={this.handleChange} placeholder='edition' /><br/>
				condition: <Input type='text' name='condition' value={this.state.condition} onChange={this.handleChange} placeholder='condition' /><br/>
				price: <Input type='number' name='price' value={this.state.price} onChange={this.handleChange} placeholder='price' /><br/>
				rentalTime: <Input type='text'name='rental_time' value={this.state.rentalTime} onChange={this.handleChange} placeholder='rental_time' /><br/>
				<Button>upload</Button>
			</Form>
			</div>

		)
	}
}

export default CreateCopy
import React from 'react'
import { Form, Button, Input } from 'semantic-ui-react'

class CreateBook extends React.Component{
	constructor(){
		super()
		this.state = {
			title: '',
			author:'',
			ISBN:'',
			summary:'',
			URL:'',
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
	}


	render(){
		return(
			<div>
				<h1>Upload a book you like</h1>
				<Form onSubmit={this.handleSubmit}>
					title: <Input name='title' value={this.state.value} onChange={this.handelChange} placeholder='title'/><br/>
					author: <Input name='author' value={this.state.value} onChange={this.handelChange} placeholder='author'/><br/>
					summary: <Input name='summary' value={this.state.value} onChange={this.handelChange} placeholder='summary'/><br/>
					ISBN: <Input name='ISBN' value={this.state.value} onChange={this.handelChange} placeholder='ISBN'/><br/>
					URL for image: <Input name='URL' value={this.state.value} onChange={this.handelChange} placeholder='URL'/><br/>
				</Form>
			</div>
		)
	}

}

export default CreateBook 
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

	handleChange = async (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		const addBookCall = this.props.uploadBook(this.state)

		// console.log(addBookCall);
		addBookCall.then((data) => {
			if(data.status.message === "success"){
	          // this.props.history.push('/books')
	          // console.log(data.data);
	          	console.log('success????');
	        } else {
	          console.log(data, ' unsuccessful')
	        }
		})


		this.props.toggleUpload()
		this.setState({
			title: '',
			author:'',
			ISBN:'',
			summary:'',
			URL:'',
		})
	}


	render(){
		// console.log(this.state);
		return(
			<div>
				<h1>Upload a book you like</h1>
				<Form onSubmit={this.handleSubmit}>
					title: <Input type='text' name='title' value={this.state.value} onChange={this.handleChange} placeholder='title'/><br/>
					author: <Input type='text' name='author' value={this.state.value} onChange={this.handleChange} placeholder='author'/><br/>
					summary: <Input type='text' name='summary' value={this.state.value} onChange={this.handleChange} placeholder='summary'/><br/>
					ISBN: <Input type='text' name='ISBN' value={this.state.value} onChange={this.handleChange} placeholder='ISBN'/><br/>
					URL for image: <Input type='text' name='URL' value={this.state.value} onChange={this.handleChange} placeholder='URL'/><br/>
					<Button>submit</Button>
				</Form>
			</div>
		)
	}

}

export default CreateBook 
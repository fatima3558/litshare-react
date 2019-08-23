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
		const data = new FormData()
		data.append('title', this.state.title)
		data.append('author', this.state.author)
		data.append('summary', this.state.summary)
		data.append('ISBN', this.state.ISBN)
		data.append('URL', this.state.URL)
		const addBookCall = this.props.uploadBook(data)

		// console.log(addBookCall);
		addBookCall.then((data) => {
			if(data.status.message === "success"){
	          // this.props.history.push('/books')
	          console.log('success????');
	        } else {
	          console.log(data, ' unsuccessful')
	        }
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
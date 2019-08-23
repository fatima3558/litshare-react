import React from 'react'
import { Form, Button, Input } from 'semantic-ui-react'

class CreateBook extends React.Component{
	constructor(){
		super()
		this.state = {

		}
	}

	render(){
		return(
			<div>
				<h1>Upload a book you like</h1>
				<Form>
					<Input />
				</Form>
			</div>
		)
	}

}

export default CreateBook 
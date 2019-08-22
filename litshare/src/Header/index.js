import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Grid, Input, Button, Form } from 'semantic-ui-react'


class Header extends React.Component{
	constructor(){
		super()
		this.state={
			keyword:''
		}
	}

	handleSubmit=(e) =>{
		e.preventDefault()

	}

	handleChange=(e) => {
		this.setState({
			keyword:e.target.value
		})
	}

	render(){
		console.log(this.state);	
		return (
				<Grid>
					<Grid.Column width={4}>
						<Form onSubmit={this.handleSubmit}>
							<Input icon='search' name='keyword' placeholder='Search...' value={this.state.value} onChange={this.handleChange}/>
							<Button>find</Button>
						</Form>
					</Grid.Column>
					<Grid.Column width={8}>
						<h1> LITSHARE </h1>
					</Grid.Column>
					<Grid.Column width={4}>
						<a href='/users/register'>register</a><br/>
 						<a href='/users/login'>login</a><br/>
						<a>username</a><br/>
						<a>logout</a>			
					</Grid.Column>
				</Grid>
		)
	}
}

export default Header;

// <Link to='/users/register'>register</Link><br/>
// <Link to='/users/login'>login</Link><br/>
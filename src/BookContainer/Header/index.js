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
		// need to query the data base with the key word
		//have a function that is being passed down from the parent, where the argument is this.state.keyword
		// console.log(this.props,'<-----props in the header');
		this.props.findBooksWithKeyword(this.state.keyword)
	}

	handleChange=(e) => {
		this.setState({
			keyword:e.target.value
		})
	}

	showUserInfo = () => {
		this.props.history.push('/users')
	}


	render(){
		// console.log(this.state);	
		return (
				<Grid>
					<Grid.Column width={4}>
						<Form onSubmit={this.handleSubmit}>
							<Input icon='search' name='keyword' placeholder='Search...' value={this.state.value} onChange={this.handleChange}/>
							<Button>find</Button>
						</Form>
					</Grid.Column>
					<Grid.Column width={8}>
						<h1 align='middle'> LITSHARE</h1>
					</Grid.Column>
						{this.props.loggedIn ? 
							<Grid.Column width={4} align='right'>
								<a onClick={this.showUserInfo}>{this.props.username}</a><br/>
								<Button onClick={this.props.toggleLogin}>Log Out</Button> 
							</Grid.Column> :
							null
						}
				</Grid>
		)
	}
}

export default Header;

// <Link to='/users/register'>register</Link><br/>
// <Link to='/users/login'>login</Link><br/>
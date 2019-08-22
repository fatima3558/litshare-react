import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Input } from 'semantic-ui-react'


const Header = () => {
	return (
		<Grid>
			<Grid.Colum width={4}>
				<Input icon='search' placeholder='Search...' />
			</Grid.Colum>
			<Grid.Colum width={6}>
				<h1> LITSHARE </h1>
			</Grid.Colum>
			<Grid.Colum width={4}>
				<a>login</a>
				<a>logout</a>			
			</Grid.Colum>
		</Grid>
	)
}

export default Header 
import React from 'react'
import { Grid, Sticky } from 'semantic-ui-react'

function Footer(props){
	return(
		<Sticky>
			<Grid attached='bottom'>
				<Grid.Column width={6} align='middle'>
					{props.loggedIn ? 
						<a onClick={props.toggleUpload.bind(null)}>Upload a Book</a> : 
						<a href='/users'>Log In or Register</a>
					}
				</Grid.Column>
				<Grid.Column width={2} align='middle'>
					<a>author</a>
				</Grid.Column>
				<Grid.Column width={2} align='middle'>
					<a>archive</a>
				</Grid.Column>
				<Grid.Column width={6} align='middle'>
					<p>© 2019 <i>LITSHARE</i> by Chris, Fatima, Yuzhu</p>
				</Grid.Column>
			</Grid>
		</Sticky>
	)
}

export default Footer
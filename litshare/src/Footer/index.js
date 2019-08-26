import React from 'react'
import { Grid, Sticky } from 'semantic-ui-react'

function Footer(props){
	return(
		<Sticky className='Footer'>
			<Grid attached='bottom'>
				<Grid.Column width={4} align='middle'>
					{props.loggedIn ? 
						<a onClick={props.toggleUpload.bind(null)}>Upload a Book</a> : 
						<a href='/users'>Log In or Register</a>
					}
				</Grid.Column>

				<Grid.Column width={8} align='middle'>
					<p>© 2019 <i>LITSHARE</i> by Chris, Fatima, Yuzhu</p>
				</Grid.Column>

				<Grid.Column width={4} align='middle'>
					<p>&hearts; &hearts; &hearts; &hearts; &hearts; &hearts; &hearts;</p>
				</Grid.Column>
			</Grid>
		</Sticky>
	)
}

export default Footer
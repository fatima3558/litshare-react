import React from 'react'
import { Grid, Sticky } from 'semantic-ui-react'

function Footer(){
	return(
		<Sticky>
			<Grid attached='bottom'>
				<Grid.Column width={3} align='middle'>
					<a>author</a>
				</Grid.Column>
				<Grid.Column width={3} align='middle'>
					<a>archive</a>
				</Grid.Column>
				<Grid.Column width={7} align='left'>
					<p>© 2019 <i>LITSHARE</i> by Chris, Fatima, Yuzhu</p>
				</Grid.Column>
				<Grid.Column width={3} align='middle'>
					<a>upload a book</a>
				</Grid.Column>
			</Grid>
		</Sticky>
	)
}

export default Footer
import React from 'react'
import { Divider, Grid, Image } from 'semantic-ui-react'


function SingleBook(props){

	return(
		<Grid>
			<Grid.Column width={5} align='middle'>
				<Image size='medium' src={props.book.URL} />
			</Grid.Column>

			<Grid.Column width={5} align='middle'>
				Title: <p>{props.book.title}</p><br/><br/>
				Author: <p>{props.book.author}</p><br/><br/>
				Summary: <p>{props.book.summary}</p><br/><br/><br/><br/>
				<a href='onlick'> Add a copy</a> 
			</Grid.Column>
				
			<Grid.Column width={5} align='middle'>
				copy info
			</Grid.Column>
		</Grid>
	)
}

export default SingleBook
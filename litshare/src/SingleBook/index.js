import React from 'react'
import { Divider, Grid, Image } from 'semantic-ui-react'
import CopyList from '../CopyList'

function SingleBook(props){
	// console.log(props.book.id,"<-----bookid");
	// console.log(props,",<-----props in singlbook");

	return(
		<Grid>
			<Grid.Column width={5} align='middle'>
				<Image size='medium' src={props.book.URL} />
			</Grid.Column>

			<Grid.Column width={5} align='middle'>
				<h1>{props.book.title}</h1><br/><br/>
				Author: <p>{props.book.author}</p><br/><br/>
				Summary: <p>{props.book.summary}</p><br/><br/><br/><br/>
				<a onClick={props.displayCreateCopy.bind(null,props.book)}> Add a copy</a> 
			</Grid.Column>
				
			<Grid.Column width={5} align='middle'>
				<CopyList bookid={props.book.id}/>
			</Grid.Column>
		</Grid>
	)
}

export default SingleBook
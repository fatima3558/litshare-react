import React from 'react'
import { Grid, Image } from 'semantic-ui-react'


function SearchBooks(props){
	console.log(props,"<-----props in searchbooks");
	const displaySearchBook = props.books.map(book => {
		return (
			<Grid.Column width={5} key={book.id} align='middle'>
				<a onClick={props.displayOneBook.bind(null, book.id)}><Image size='small' src={book.URL} /></a>
				<h4>{book.title}</h4>
			</Grid.Column> 
		)
	})
	return(
		<div>
			<h2>searchbooks: {props.keyword}</h2>
			<br/><br/>
			<Grid>
				{displaySearchBook}
			</Grid>
		</div>
	)
}

export default SearchBooks
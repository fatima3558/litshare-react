import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

function FeaturedBooks (props){
	console.log(props, "<-------props from the FeaturedBooks");
	const booksLength = props.books.length
	const randomNum = (length) => {
		return Math.floor(Math.random() * Math.floor(length))
	}
	let bookArr
	// console.log(length);
	if(booksLength < 3){
		bookArr = props.books
	} else if(booksLength > 3) {	
		bookArr = [props.books[randomNum(booksLength)],props.books[randomNum(booksLength)],props.books[randomNum(booksLength)]]
	}

	const find3Books = bookArr.map(book => {
		return (
			<Grid.Column width={5} key={book.id}>
				<Image size='medium' src={book.URL} />
				<h4>{book.title}</h4>
			</Grid.Column> 
		)
	})
		
	//generate 3 random number that are smaller than the book array 
	// if book array has less than 3 books, display all of them 

	return(
		<Grid>
			{find3Books}
		</Grid>
	)
}

export default FeaturedBooks 
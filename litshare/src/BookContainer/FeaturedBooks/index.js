import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

function FeaturedBooks (props){
	// console.log(props, "<-------props from the FeaturedBooks");
	const booksLength = props.books.length
	const randomNum = (length) => {
		return Math.floor(Math.random() * Math.floor(length))
	}
	let bookArr
	// console.log(length);
	if(booksLength <= 3){
		bookArr = props.books
	} else if(booksLength > 3) {
		let numArr = []
		let num
		while(numArr.length < 4){
			num = randomNum(booksLength)
			if(numArr.indexOf(num) === -1){
				numArr.push(num)
			}	
		}
		bookArr = [props.books[numArr[0]],props.books[numArr[1]],props.books[numArr[2]]]
	}

	const find3Books = bookArr.map((book,i) => {
		// const url = `books/${book.id}`
		return (
			<Grid.Column width={5} key={i} align='middle'>
				<a onClick={props.displayOneBook.bind(null, book.id)}><Image size='small' src={book.URL} /></a>
				<h4>{book.title}</h4>
			</Grid.Column> 
		)
	})
		
	//generate 3 random number that are smaller than the book array 
	// if book array has less than 3 books, display all of them 

	return(
		<div>
			<h2>featured books</h2>
			<br/><br/>
			<Grid>
				{find3Books}
			</Grid>
		</div>
	)
}

export default FeaturedBooks 
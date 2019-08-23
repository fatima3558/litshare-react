import React from 'react'

class SingleBook extends React.Component {

	constructor(){
		super()
		this.state={
			bookid: null,
			singleBook: {}
		}
	}

	getBook = async (bookId) => {
		const findBookResponse = await fetch(`http://localhost8000:books/${bookId}`,{
			method: 'GET',
			credentials: 'include'
		})

		console.log(getBook);
	}



	render(){
		return(
			<div>



			</div>
		)
	}

}
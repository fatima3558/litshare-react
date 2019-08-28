import React from 'react'
import { Route, Switch } from 'react-router-dom' 
import { } from 'semantic-ui-react'
import FeaturedBooks from './FeaturedBooks'
import Header from './Header'
import SearchBooks from './SearchBooks'
import Footer from '../Footer'
import SingleBook from './SingleBook'
import CreateBook from './CreateBook'



class BookContainer extends React.Component{
	constructor(){
		super()
		this.state={
			books:[],
			keywordbooks:[],
			keyword:'',
			oneBook: null,
			currentBook: null,
			displayUpload: false,
		}
	}

	componentDidMount(){
		this.findAllBooks()
	}


	findAllBooks= async () =>{
		//this will find all the books for the archive link in the footer
		try{
			const findAllBooksResponse = await fetch(`${process.env.REACT_APP_API_URL}/books/`,{
				method: 'GET',
				credentials: 'include'
			})
			// console.log(findAllBooksResponse,"<-----this is find al books in the boookcontainer");
			const parsedResponse = await findAllBooksResponse.json()
			// console.log(parsedResponse, "<----parsedresponse");
			this.setState({
				books:[...parsedResponse.data]
			})
		}catch(err){
			console.log(err);
			return err 
		}

	}



	displayOneBook = async (bookId) => {
		const findOneBookResponse = await fetch(`${process.env.REACT_APP_API_URL}/books/${bookId}`,{
			method: 'GET',
			credentials: 'include'
		})

		// console.log(findOneBookResponse,"<------findone book resposne in bookcontainer");
		const parsedResponse = await findOneBookResponse.json()
		// console.log(parsedResponse,"<----findone book response ");
		this.setState({
			oneBook: parsedResponse.data,
			keyword: null
		})


	}

	uploadBook = async (data) => {
		try{
			const uploadBookResponse = await fetch(`${process.env.REACT_APP_API_URL}/books/`,{
				method:'POST',
				credentials: 'include',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json'
				}
			})	
			// console.log(uploadBookResponse,"<------upload book response");
			const parsedResponse = await uploadBookResponse.json()
			// console.log(parsedResponse,"<-----parsedresponse in uploadbook");
			this.setState({
				books:[...this.state.books, parsedResponse.data]
			})
			return parsedResponse
		}catch(err){
			console.log(err)
			return err
		}
	}


	findBooksWithKeyword= async (keyword) => {
    	try{
    		const url = `${process.env.REACT_APP_API_URL}/books/results?keyword=${keyword}`
    		// console.log("searching url:");
    		// console.log(url);	
      		const findBooksWithKeywordResponse = await fetch(url, { 
        		method: 'GET',
        		credentials: 'include'
      		})
	    	// console.log(keyword);
	      	// console.log(findBooksWithKeywordResponse);
	      	const prasedResponse = await findBooksWithKeywordResponse.json()
	      	// console.log(prasedResponse,"<-------searchbooks parsedResponse");
	      	this.setState({
	      		keywordbooks:[...prasedResponse.data],
	      		keyword: keyword,
	      		oneBook: null
	      	})

    	} catch(err){
     		console.log(err)
      		return err 
    	}
  	}
  	
	render(){
		// console.log(this.state,"<-----state in the boookcontainer");
		return(
			<main>
				<Header {...this.props} findBooksWithKeyword={this.findBooksWithKeyword}/>
				<br/><br/>

				{!this.state.keyword && !this.state.oneBook ? <FeaturedBooks displayOneBook={this.displayOneBook} books={this.state.books}/> : null}
				{this.state.keyword && !this.state.oneBook ? <SearchBooks displayOneBook={this.displayOneBook} books={this.state.keywordbooks} keyword={this.state.keyword} /> : null}

				<br/><br/><br/>
				{this.state.oneBook && !this.state.keyword? <SingleBook {...this.props} displayUser={this.props.displayUser} book={this.state.oneBook} username={this.props.username}/>: null}
				
				{this.props.displayUpload ? <CreateBook displayOneBook={this.displayOneBook} toggleUpload={this.props.toggleUpload} uploadBook={this.uploadBook}/>: null}
				<br/><br/><br/>
			</main>
		)
	}
}

export default BookContainer
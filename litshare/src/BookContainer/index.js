import React from 'react'
import { Route, Switch } from 'react-router-dom' 
import { } from 'semantic-ui-react'
import FeaturedBooks from '../FeaturedBooks'
import Header from '../Header'
import SearchBooks from '../SearchBooks'

class BookContainer extends React.Component{
	constructor(){
		super()
		this.state={
			books:[],
			keywordbooks:[],
			keyword:''
		}
	}

	componentDidMount(){
		this.findAllBooks()
	}


	findAllBooks= async () =>{
		//this will find all the books for the archive link in the footer
		try{
			const findAllBooksResponse = await fetch('http://localhost:8000/books/',{
				method: 'GET',
				credentials: 'include'
			})
			// console.log(findAllBooksResponse,"<-----this is find al books in the boookcontainer");
			const parsedResponse = await findAllBooksResponse.json()
			console.log(parsedResponse, "<----parsedresponse");
			this.setState({
				books:[...parsedResponse.data]
			})
		}catch(err){
			console.log(err);
			return err 
		}

	}

	findBooksWithKeyword= async (keyword) => {
    	try{
    		const url = `http://localhost:8000/books/results?keyword=${keyword}`
    		console.log("searching url:");
    		console.log(url);	
      		const findBooksWithKeywordResponse = await fetch(url, { 
        		method: 'GET',
        		credentials: 'include'
      		})
	    	// console.log(keyword);
	      	// console.log(findBooksWithKeywordResponse);
	      	const prasedResponse = await findBooksWithKeywordResponse.json()
	      	console.log(prasedResponse,"<-------searchbooks parsedResponse");
	      	this.setState({
	      		keywordbooks:[...prasedResponse.data],
	      		keyword: keyword
	      	})

    	} catch(err){
     		console.log(err)
      		return err 
    	}
  	}


	render(){
		console.log(this.state,"<-----state in the boookcontainer");
		return(
			<main>
				<Header findBooksWithKeyword={this.findBooksWithKeyword}/>
				<br/><br/><br/>
				{this.state.keyword ? null : <FeaturedBooks books={this.state.books}/>}
				{this.state.keyword ? <SearchBooks books={this.state.keywordbooks} keyword={this.state.keyword} /> : null}
				
			</main>
		)
	}
}

export default BookContainer
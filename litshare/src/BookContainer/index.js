import React from 'react'
import { Route, Switch } from 'react-router-dom' 

import { } from 'semantic-ui-react'
import FeaturedBooks from '../FeaturedBooks'
import Header from '../Header'


class BookContainer extends React.Component{
	constructor(){
		super()
		this.state={
			books:[]
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
    	console.log(keyword);
      const findBooksWithKeywordResponse = await fetch(`http://localhost:8000/books/results?keyword=${keyword}/`,{
        method: 'GET',
        credentials: 'include'
      })
      // console.log(findBooksWithKeywordResponse);
      const prasedResponse = await findBooksWithKeywordResponse.json()
      
    }catch(err){
      console.log(err)
      return err 
    }
  }


	render(){
		console.log(this.state,"<-----state in the boookcontainer");
		return(
			<div>
				<Header findBooksWithKeyword={this.findBooksWithKeyword}/>
				<FeaturedBooks books={this.state.books}/> 
			</div>
		)
	}
}

export default BookContainer
import React from 'react'
import { Divider, Grid, Image } from 'semantic-ui-react'
import CopyList from '../CopyList'
import CreateCopy from '../CreateCopy'

class SingleBook extends React.Component{
	// this.props.book.id is the single book id 
	constructor(){
		super()
		this.state ={
			displayUploadCopy: false,
			copies:[],
			addedCopy: null
		}
	}

	componentDidMount(){
		this.getCopy()
	}

	getCopy = async () => {
		const url = `http://localhost:8000/books/${this.props.book.id}/copy`
		const getCopiesResponse = await fetch(url,{
			method: 'GET',
        	credentials: 'include'
		})

		// console.log(getCopiesResponse);
	    const prasedResponse = await getCopiesResponse.json()
	    // console.log(prasedResponse,"<00000000parsedresposne ");

	    this.setState({
	    	copies: prasedResponse.data
	    })
	}

	addCopy = async (data) => {
  		console.log("DATA SENT TO BACKEND FOR ADDCOPY:")
  		console.log(data)

  		try{
  			const url = `http://localhost:8000/books/${this.props.book.id}/copy`
  			console.log(url);
			const uploadCopyResponse = await fetch(url,{
				method:'POST',
				credentials: 'include',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json'
				}
			})	
			// console.log(uploadCopyResponse,"<------upload book response");
			const parsedResponse = await uploadCopyResponse.json()
			// console.log(parsedResponse,"<-----parsedresponse in uploadbook");
			this.setState({
				copies:[...this.state.copies, parsedResponse.data],
				addedCopy: parsedResponse.data
			})
			return parsedResponse
		}catch(err){
			console.log(err)
			return err
		}
  	}


	displayCreateCopy = () => {
  		this.setState({
  			displayUploadCopy: this.state.displayUploadCopy ? false : true 
  		})
  		// here should be able to toggle the form Createcopy and setbookid in the state

  	}

  	// should display all the copies which is in the copy list. 


  	deleteOneCopy = async (copyId) => {
		console.log(copyId,"<-------should be the copyid!!!");
		const url = `http://localhost:8000/books/${this.props.bookid}/copy/${copyId}`
		const deleteOneCopyResponse = await fetch(url, {
			method: 'DELETE',
			credentials: 'include'
		})
		const prasedResponse = await deleteOneCopyResponse.json()
		console.log(prasedResponse,"<---------deleteOneCopy response ");
		const newCopies = this.state.copies.filter(copy => copy.id !== copyId)
		console.log(newCopies,"<----newcopies");
		this.setState({
			copies : newCopies
		})
	}

	render(){	
		return(
			<div>
				<Grid>
					<Grid.Column width={5} align='middle'>
						<Image size='medium' src={this.props.book.URL} />
					</Grid.Column>

					<Grid.Column width={5} align='middle'>
						<h1>{this.props.book.title}</h1><br/><br/>
						Author: <p>{this.props.book.author}</p><br/><br/>
						Summary: <p>{this.props.book.summary}</p><br/><br/><br/><br/>
						<a onClick={this.displayCreateCopy}> Add a copy</a> 
					</Grid.Column>
						
					<Grid.Column width={5} align='middle'>
						<CopyList deleteOneCopy={this.deleteOneCopy} addedCopy={this.props.addedCopy} copies={this.state.copies}/>
					</Grid.Column>
				</Grid>
				{this.state.displayUploadCopy ? <CreateCopy displayCreateCopy={this.displayCreateCopy} addCopy={this.addCopy} /> : null}
			</div>
		)
	}
}

export default SingleBook
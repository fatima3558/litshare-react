import React from 'react'
import { Divider, Grid, Image } from 'semantic-ui-react'
import CopyList from '../CopyList'
import CreateCopy from '../CreateCopy'
import EditCopy from '../EditCopy'


class SingleBook extends React.Component{
	// this.props.book.id is the single book id 
	constructor(){
		super()
		this.state ={
			displayUploadCopy: false,
			copies:[],
			addedCopy: null,
			displayEditCopy: false,
			bookid:null
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
		const url = `http://localhost:8000/books/${this.props.book.id}/copy/${copyId}`
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


	editCopy =(copy) => {
		console.log(copy);
		this.displayEditCopy()
		this.setState({
			copyToEdit: copy
		})
	}

	updateEditCopy= async (data) => {
		const url = `http://localhost:8000/books/${this.props.book.id}/copy/${this.state.copyToEdit.id}`
		console.log(url,"<------url in updateEditCopy");
		const editCopyResponse = await fetch(url,{
			method:'PUT',
			credentials: 'include',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		// console.log(editCopyResponse,"<o----------edit copy response");
		const parsedResponse = await editCopyResponse.json()
		console.log(parsedResponse.data,"<<-----response in copy response");
		const newCopiesData = this.state.copies.map(copy => {
				if(copy.id===parsedResponse.data.id){
					return parsedResponse.data
				}else {
					return copy
				}
		})
		// console.log(this.state.copies,"<-------state.copies");
		// console.log(newCopiesData,"<-------newstate to set");
		this.setState({
			copies: newCopiesData
		})
	}


	displayEditCopy = () => {
		this.setState({
			displayEditCopy: this.state.displayEditCopy ? false : true 
		})
	}

	render(){	
		console.log(this.state);
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
						<CopyList deleteOneCopy={this.deleteOneCopy} addedCopy={this.props.addedCopy} editCopy={this.editCopy} copies={this.state.copies}/>
					</Grid.Column>
				</Grid>
				{this.state.displayEditCopy ? <EditCopy updateEditCopy={this.updateEditCopy} copyToEdit={this.state.copyToEdit} displayEditCopy={this.displayEditCopy}/> :null}
				{this.state.displayUploadCopy ? <CreateCopy displayCreateCopy={this.displayCreateCopy} addCopy={this.addCopy} /> : null}
			</div>
		)
	}
}

export default SingleBook
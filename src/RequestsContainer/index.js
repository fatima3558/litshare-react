import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../BookContainer/Header'
import SearchBooks from '../BookContainer/SearchBooks'
import RequestsList from '../RequestsList'


class RequestsContainer extends React.Component{
	constructor(){
		super()
		this.state={
			requests: [],
			requestType: '',
			createdLoan: null
		}
	}

	componentDidMount(){
		console.log("*** Props for Request Container ***", this.props);
		this.findAllRequests()
	}

	findAllRequests = async () => {
			try {
				const findAllRequests = await fetch(`http://localhost:8000/requests/${this.props.user.id}`, {
					method: 'GET',

				});
				const parsedResponse = await findAllRequests.json();
				// console.log("*** Parsed Response (findAllRequests) ***", parsedResponse);
				this.setState({
					requests:[... parsedResponse.data]
				})
			} catch(err) {
				console.log(err);
				return err
			}
		}

	findSentRequests = async () => {
			try {
				
				const findSentRequests = await fetch(`http://localhost:8000/requests/sent/${this.props.user.id}`, {
					method: 'GET'
				});
				const parsedResponse = await findSentRequests.json();
				// console.log("*** Parsed Response (findSentRequests) ***", parsedResponse);
				this.setState({
					requests:[... parsedResponse.data]
				})
			} catch(err) {
				console.log(err);
				return err
			}
		}

	findReceivedRequests = async () => {
			try {
				const findReceivedRequests = await fetch(`http://localhost:8000/requests/received/${this.props.user.id}`, {
					method: 'GET'
				});
				const parsedResponse = await findReceivedRequests.json();
				this.setState({
					requests:[...parsedResponse.data]
				})
			} catch(err) {
				console.log(err);
				return err
			}
		}

	updateRequestApprove = async (ask_id) => {
		try{
			const thisRequest = await fetch(`http://localhost:8000/requests/${ask_id}`)
			const parsedThisRequest = await thisRequest.json()
			// console.log(parsedThisRequest,'<------this request from approval');
			const thisData = parsedThisRequest.data[0]
			const due = thisData.copy_id.rental_time
			thisData.approval_granted = true
			thisData.borrower_id = thisData.borrower_id.id
			thisData.copy_id = thisData.copy_id.id
			thisData.owner_id = thisData.owner_id.id
			// console.log(thisData,"<------thisdata from approval");
			// const requestBody = JSON.stringify({"approval_granted": true, })
			// const oneResposne = await fetch(`http://localhost:8000/requests/`)
			const updateResponse = await fetch(`http://localhost:8000/requests/${ask_id}`, {
				method: 'PUT',
				credentials: 'include',
				body: JSON.stringify(thisData),
				headers: {
					'Content-Type': 'application/json'
				}
			})

			const parsedResponse = await updateResponse.json()
			console.log(parsedResponse,"<-------updated resposne for approval");
			const today = new Date()
			const dateborrowed = new Date()
			console.log(today, '<------today att first');
			const dueDate = today.setDate(today.getDate()+due)
			console.log(today, '<-----today');
			// console.log(dueDate.toDateString(), "<====== duedate");
			const loanRequestBody = {ask_id: ask_id, date_due: today, date_borrowed: dateborrowed}
			const createdLoan = await fetch(`http://localhost:8000/loan/`, {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(loanRequestBody),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			// console.log(createdLoan);
			const parsedLoan = await createdLoan.json()
			console.log(parsedLoan,'<--------parsedLoan response');

			this.setState({
				createdLoan: parsedLoan
			})

		} catch(err) {
			console.log(err);
			return err
		}

	}

	updateRequestDeny = async (ask_id) => {
		try{
			const thisRequest = await fetch(`http://localhost:8000/requests/${ask_id}`)
			const parsedThisRequest = await thisRequest.json()
			// console.log(parsedThisRequest,'<------this request from approval');
			const thisData = parsedThisRequest.data[0]
			thisData.approval_granted = false
			thisData.borrower_id = thisData.borrower_id.id
			thisData.copy_id = thisData.copy_id.id
			thisData.owner_id = thisData.owner_id.id
			// console.log(thisData,"<------thisdata from approval");
			// const requestBody = JSON.stringify({"approval_granted": true, })
			// const oneResposne = await fetch(`http://localhost:8000/requests/`)
			const updateResponse = await fetch(`http://localhost:8000/requests/${ask_id}`, {
				method: 'PUT',
				credentials: 'include',
				body: JSON.stringify(thisData),
				headers: {
					'Content-Type': 'application/json'
				}
			})

			const parsedResponse = await updateResponse.json()
			// console.log(parsedResponse,"<-------updated resposne for approval");

		} catch(err) {
			console.log(err);
			return err
		}

	}

	handleOptionChange = changeEvent => {
		this.setState({
			requestType: changeEvent.target.value
		});
		if(changeEvent.target.value == 'sent'){
			this.findSentRequests()
		}
		if(changeEvent.target.value == 'received'){
			this.findReceivedRequests()
		}
		if(changeEvent.target.value == 'all'){
			this.findAllRequests()
		}
	}



	render(){
		console.log("**** The state of the Request Component ****", this.state);
		return(
			<div>
				<form>
					<fieldset>
						<legend>Requests to see:</legend>
						<input 
							type="radio" 
							name="request-Type" 
							value="all" 
							checked={this.state.requestType === 'all'}
							onChange={this.handleOptionChange}
							className="form-check-input" 
							/>
						<label> All </label>
						<input 
							type="radio" 
							name="request-Type" 
							value="sent"
							checked={this.state.requestType === 'sent'}
							onChange={this.handleOptionChange}
							className="form-check-input" 
							/>
						<label> Sent </label>
						<input 
							type="radio" 
							name="request-Type" 
							value="received"
							checked={this.state.requestType === 'received'}
							onChange={this.handleOptionChange}
							className="form-check-input" 
							/>
						<label> Received </label>
					</fieldset>
					
				</form>
				<RequestsList 
					requests={this.state.requests} 
					type={this.state.requestType} 
					updateRequestApprove={this.updateRequestApprove} 
					updateRequestDeny={this.updateRequestDeny}
					createdLoan={this.state.createdLoan}
				/>
				
				
				
				
			</div>
			)

	}







}

export default RequestsContainer
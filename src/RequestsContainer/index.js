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
			requestType: ''
		}
	}

	componentDidMount(){
		console.log("*** Props for Request Container ***", this.props);
		this.findAllRequests()
	}

	findAllRequests = async () => {
			try {
				const findAllRequests = await fetch(`${process.env.REACT_APP_API_URL}/requests/${this.props.user.id}`, {
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
				
				const findSentRequests = await fetch(`${process.env.REACT_APP_API_URL}/requests/sent/${this.props.user.id}`, {
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
				const findReceivedRequests = await fetch(`${process.env.REACT_APP_API_URL}/requests/received/${this.props.user.id}`, {
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
			const requestBody = JSON.stringify({"approval_granted": true})
			const updateResponse = await fetch(`${process.env.REACT_APP_API_URL}/requests/approval/${ask_id}`, {
				method: 'PUT',
				credentials: 'include',
				body: requestBody,
				headers: {
					'Content-Type': 'application/json'
				}
			})
			const parsed = await updateResponse.json()
			console.log(parsed);

			const loanRequestBody = JSON.stringify({ask_id: ask_id})
			const createdLoan = await fetch(`${process.env.REACT_APP_API_URL}/loan/`, {
				method: 'POST',
				credentials: 'include',
				body: loanRequestBody,
				headers: {
					'Content-Type': 'application/json'
				}
			})
			console.log(createdLoan);
			const parsedLoan = await createdLoan.json()
			console.log(parsedLoan);

			

		} catch(err) {
			console.log(err);
			return err
		}

	}

	updateRequestDeny = async (ask_id) => {
		try{
			const requestBody = JSON.stringify({"approval_granted": false})
			const updateResponse = await fetch(`${process.env.REACT_APP_API_URL}/requests/approval/${ask_id}`, {
				method: 'PUT',
				credentials: 'include',
				body: requestBody,
				headers: {
					'Content-Type': 'application/json'
				}
			})
			const parsed = await updateResponse.json()
			console.log(parsed);


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
				<RequestsList requests={this.state.requests} type={this.state.requestType} updateRequestApprove={this.updateRequestApprove} updateRequestDeny={this.updateRequestDeny}/>
				
				
				
				
			</div>
			)

	}







}

export default RequestsContainer
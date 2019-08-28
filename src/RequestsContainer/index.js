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
			requestType: 'all'
		}
	}

	componentDidMount(){
		console.log("*** Props for Request Container ***", this.props);
		this.findAllRequests()
	}

	findAllRequests = async () => {
			try {
				const findAllRequests = await fetch(`http://127.0.0.1:8000/requests/${this.props.user.id}`, {
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
				
				const findSentRequests = await fetch(`http://127.0.0.1:8000/requests/sent/${this.props.user.id}`, {
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
				const findReceivedRequests = await fetch(`http://127.0.0.1:8000/requests/received/${this.props.user.id}`, {
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

	updateRequestApprove = async (askid) => {
		console.log("*** updateRequestApprove askid ***", askid);
		try{
			const requestBody = JSON.stringify({approval_granted: true})
			const updateResponse = await fetch(`http://127.0.0.1:8000/requests/${askid}`, {
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

	updateRequestDeny = async (askid) => {
		try{
			const requestBody = JSON.stringify({approval_granted: false})
			const updateResponse = await fetch(`http://127.0.0.1:8000/requests/${askid}`, {
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
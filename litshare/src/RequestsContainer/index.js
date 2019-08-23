import React from 'react'
// import { Route, Switch } from 'react-router-dom'
// import Header from '../Header'
// import SearchBooks from '../SearchBooks'
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
		this.findAllRequests()
	}

	findAllRequests = async () => {
		let parsedResponse
			try {
				const findAllRequests = await fetch('http://127.0.0.1:8000/requests/', {
					method: 'GET',

				});
				parsedResponse = await findAllRequests.json();
				// console.log("*** Parsed Response (findAllRequests) ***", parsedResponse);
				this.setState({
					requests:[... parsedResponse.data]
				})
			} catch(err) {
				console.log(err);
				return err
			}
			console.log("*** Parsed Response (findAllRequests) ***", parsedResponse);
		}

	findSentRequests = async () => {
		let parsedResponse
			try {
				const findSentRequests = await fetch(`http://127.0.0.1:8000/requests/sent/${this.props.username}`, {
					method: 'GET'
				});
				parsedResponse = await findSentRequests.json();
				// console.log("*** Parsed Response (findSentRequests) ***", parsedResponse);
				this.setState({
					requests:[... parsedResponse.data]
				})
			} catch(err) {
				console.log(err);
				return err
			}
			console.log("*** Parsed Response (findSentRequests) ***", parsedResponse);
		}

	findReceivedRequests = async () => {
			let parsedResponse
			try {
				const findReceivedRequests = await fetch(`http://127.0.0.1:8000/requests/received/${this.props.username}`, {
					method: 'GET'
				});
				parsedResponse = await findReceivedRequests.json();
				this.setState({
					requests:[...parsedResponse.data]
				})
			} catch(err) {
				console.log(err);
				return err
			}
			console.log("*** Parsed Response (findReceivedRequests) ***", parsedResponse);
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
				<RequestsList requests={this.state.requests} type={this.state.requestType} />
				
				
				
				
			</div>
			)

	}







}

export default RequestsContainer
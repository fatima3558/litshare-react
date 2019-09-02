import React from 'react'
// import { Route, Switch } from 'react-router-dom'
// import Header from '../Header'
// import SearchBooks from '../SearchBooks'


class LoansContainer extends React.Component{
	constructor(){
		super()
		this.state={
			loans: [],
		}
	}

	componentDidMount(){
		this.findAllRequests()
	}

		findAllLoans = async () => {
		let parsedResponse
			try {
				const findAllLoans = await fetch('http://localhost:8000/loans/', {
					method: 'GET',

				});
				parsedResponse = await findAllLoans.json();
				// console.log("*** Parsed Response (findAllRequests) ***", parsedResponse);
				this.setState({
					requests:[... parsedResponse.data]
				})
			} catch(err) {
				console.log(err);
				return err
			}
			console.log("*** Parsed Loan (findAllLoans) ***", parsedResponse);
		}


		render(){


		console.log("**** The state of the Loan Component ****", this.state);
		return(
			<div></div>
		}


}

export default RequestsContainer
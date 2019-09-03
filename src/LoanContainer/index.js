import React from 'react'

class LoanContainer extends React.Component {
	constructor() {
		super() 
		this.state = {
			foundLoan: false,
			returned: false
		}
	}

	componentDidMount() {
		this.checkForLoan()
	}

	checkForLoan = async () => {
		try {
			const findAllLoans = await fetch('http://localhost:8000/loan/', {
				method: 'GET',
				credentials: 'include',
			});
			const parsedResponse = await findAllLoans.json()
			console.log(parsedResponse, "parsedResponse");
			const existingLoan = parsedResponse.data.filter(loan => loan.ask_id.id === this.props.ask_id)
			console.log(existingLoan, "this is existing Loan in Loan Container");
			if(existingLoan) {
				this.setState({
					foundLoan: existingLoan[0]
				})
			} 

		} catch(err) {
			console.log(err);
			return err
		}
	}

	handleClick = async () => {
		try {
			const returnedLoan = this.state.foundLoan
			returnedLoan.returned = true
			returnedLoan.ask_id = returnedLoan.ask_id.id
			console.log(returnedLoan, "returned loan");
			const updatedLoan = await fetch(`http://localhost:8000/loan/${returnedLoan.id}`, {
				method: 'PUT',
				credentials: 'include',
				body: JSON.stringify(returnedLoan),
				headers: {
					'Content-Type': 'application/json'
				}
			})

			const parsedUpdatedLoan = await updatedLoan.json()
			console.log(parsedUpdatedLoan, "parsed updated loan");

			this.setState({
				returned: true
			})

		} catch(err) {
			console.log(err);
			return err
		}
	}

	render() {
		console.log(this.props, "props in LoanContainer");
		console.log(this.state.foundLoan, "found loan in state of LoanContainer");
		return(
			<div>
				{this.state.foundLoan ? 
					<div>
						This copy is due {this.state.foundLoan.date_due}<br/>
						{!this.state.returned && (this.state.foundLoan.ask_id.owner_id.id === this.props.user.id) ? 
							<button onClick={this.handleClick}>
								Mark Returned
							</button> :
							null
						}
					</div> :
					null
				}
			</div>
		)
	}
}

export default LoanContainer






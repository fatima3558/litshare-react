import React from 'react'

class LoanContainer extends React.Component {
	constructor() {
		super() 
		this.state = {
			foundLoan: false
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
					foundLoan: existingLoan
				})
			} 

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
						This copy is due {this.state.foundLoan[0].date_due}
					</div> :
					null
				}
			</div>
		)
	}
}

export default LoanContainer






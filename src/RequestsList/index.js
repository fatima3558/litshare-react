import React from 'react';
import LoanContainer from '../LoanContainer'


class RequestsList extends React.Component {
  constructor() {
    super();
    this.state = {
      loans: [],
    }
  }

  handleClick = async (ask_id) => {
    await this.props.updateRequestApprove(ask_id)
    console.log(this.props.createdLoan, "<===== the loan we created and are logging from RequestsList");
    this.setState({
      loans: [...this.state.loans, this.props.createdLoan],
      displayButtons: !this.state.displayButtons
    })
  }

  displayLoanInfo = (ask_id) => {
    return("do things here to display loan info");
  }

  render() {
    const requestsList = this.props.requests.map((ask) => {
      if(this.props.type == 'sent'){
          //if response has been give, display approved or denied
        if (ask.approval_granted !== null){
          return (
            <li key={ask.id}>
              <span>{ask.copy_id.book_id.title} by {ask.copy_id.book_id.author}</span><br/>
              <span>Owned by {ask.copy_id.owner_id.username}</span><br/>
              {ask.approval_granted ? <span>your request has been approved</span> : <span>your request has been denied</span>}
            </li>
            )
        } else {
          //if no response has been given, say it's pending
          return (
           <li key={ask.id}>
              <span>{ask.copy_id.book_id.title} by {ask.copy_id.book_id.author}</span><br/>
              <span>Owned by {ask.copy_id.owner_id.username}</span><br/>
              <span>your request is pending</span>
            </li>
          )
        }
    } else if ((this.props.type === 'received') && (ask.approval_granted === null)) {
      //a request for loggedInUser's book but no response has been given yet
      return (
        <li key={ask.id}>
          <span>{ask.copy_id.book_id.title} by {ask.copy_id.book_id.author}</span><br/>
          <span>Requested by: {ask.borrower_id.username} on {ask.ask_date}</span> 
          <button onClick={this.handleClick.bind(null, ask.id)}>
            Approve
          </button>
          <button onClick={this.props.updateRequestDeny.bind(null, ask.id)}>
            Deny
          </button>
        </li>

        )
    } else if ((this.props.type === 'received') && (ask.approval_granted === true)) {
      //a request for loggedInUser's book that loggedInUser has approved
      return (
        <li key={ask.id}>
          <span>{ask.copy_id.book_id.title} by {ask.copy_id.book_id.author}</span><br/>
          <span>Requested by: {ask.borrower_id.username} on {ask.ask_date}</span><br/>
          <span>You have approved this request!</span>
          <LoanContainer loans={this.state.loans} ask_id={ask.id}/>
        </li>

        )
    } else if ((this.props.type === 'received') && (ask.approval_granted === false)) {
      //a request for loggedInUser's book that loggedInUser has denied
      return (
        <li key={ask.id}>
          <span>{ask.copy_id.book_id.title} by {ask.copy_id.book_id.author}</span><br/>
          <span>Requested by: {ask.borrower_id.username} on {ask.ask_date}</span><br/>
          <span>You have denied this request!</span>
        </li>

        )
      } 
    })

    return (
      <ol>
        {requestsList}
      </ol>
    )
  }
}



export default RequestsList;
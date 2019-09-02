import React from 'react';


const RequestsList = (props) => {
  console.log('props in RequestsList', props)




  const requestsList = props.requests.map((ask) => {
    if(props.type == 'sent'){
      if (ask.approval_granted !== null){
        return (
          <li key={ask.id}>
            <span>{ask.copy_id.book_id.title} by {ask.copy_id.book_id.author}</span><br/>
            <span>Owned by {ask.copy_id.owner_id.username}</span><br/>
            {ask.approval_granted ? <span>your request has been approved</span> : <span>your request has been denied</span>}
          </li>
          )
      } else {
        return (
         <li key={ask.id}>
            <span>{ask.copy_id.book_id.title} by {ask.copy_id.book_id.author}</span><br/>
            <span>Owned by {ask.copy_id.owner_id.username}</span><br/>
            <span>your request is pending</span>
          </li>
        )
      }
  } else if ((props.type == 'received') && (ask.approval_granted == null)) {
    return (
      <li key={ask.id}>
        <span>{ask.copy_id.book_id.title} by {ask.copy_id.book_id.author}</span><br/>
        <span>Requested by: {ask.borrower_id.username} on {ask.ask_date}</span> 
        <button onClick={props.updateRequestApprove.bind(null, ask.id)}>Approve</button><button onClick={props.updateRequestDeny.bind(null, ask.id)}>Deny</button>
      </li>

      )
  } else if ((props.type == 'received') && (ask.approval_granted == true)) {
    return (
      <li key={ask.id}>
        <span>{ask.copy_id.book_id.title} by {ask.copy_id.book_id.author}</span><br/>
        <span>Requested by: {ask.borrower_id.username} on {ask.ask_date}</span><br/>
        <span>You have approved this request!</span>
      </li>

      )
  } else if ((props.type == 'received') && (ask.approval_granted == false)) {
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



export default RequestsList;
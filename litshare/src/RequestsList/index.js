import React from 'react';


const RequestsList = (props) => {
  console.log('props in RequestsList', props)




  const requestsList = props.requests.map((ask) => {
    if(props.type == 'sent'){
    return (
      <li key={ask.id}>
        <span>{ask.copy_id.book_id.title} by {ask.copy_id.book_id.author}</span><br/>
        <span>Owned by {ask.copy_id.owner_id.username}</span><br/>
      </li>

      )
  } else if (props.type == 'received') {
    return (
      <li key={ask.id}>
        <span>{ask.copy_id.book_id.title} by {ask.copy_id.book_id.author}</span><br/>
        <span>Requested by: {ask.borrower_id.username} on {ask.ask_date}</span><br/>
      </li>

      )
  } else {
    return (
      <li key={ask.id}>
        <span>{ask.copy_id.book_id.title} by {ask.copy_id.book_id.author}</span><br/>
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
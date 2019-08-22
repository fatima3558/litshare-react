import React, { Component } from 'react';
import './App.css';
import UsersContainer from './UsersContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: 'Guest'
    }
  }

  toggleLogin = async (name) => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
    if (this.state.loggedIn === true) {
      this.setState({
        username: name
      })
    } else {
      //reset state
      this.setState({
        username: 'Guest'
      })
      try {
        // query database to logout
        await fetch('http://localhost:8000/users/logout', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          }
        })

      } catch(err) {
        console.log(err)
      }
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
      <UsersContainer 
        loggedIn={this.state.loggedIn}
        toggleLogin={this.toggleLogin}
      />
      </div>
    )
  }
}

export default App;

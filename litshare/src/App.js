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

  toggleLogin = (name) => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
    if (this.state.loggedIn === true) {
      this.setState({
        username: name
      })
    } else {
      this.setState({
        username: 'Guest'
      })
    }
  }

  render() {
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

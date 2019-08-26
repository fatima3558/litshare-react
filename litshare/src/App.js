import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom' 
import UsersContainer from './UsersContainer';
import BookContainer from './BookContainer';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: 'Guest',
      loggedInUser: {},
      displayedUser:null
    }
  }

  toggleLogin = async (user) => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
    if (this.state.loggedIn === true) {
      console.log("this is app.js toggleLogin() user.username:", user.username);
      this.setState({
        username: user.username,
        loggedInUser: user
      })
    } else 
    if (this.state.loggedIn === false) {
        // query database to logout
        console.log("things before api call to log out");
        try {
          await fetch('http://localhost:8000/users/logout', {
            method: 'GET',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json'
            }
          })
        console.log("things after api call to log out");
        //reset state
        this.setState({
          username: 'Guest',

        })


      } catch(err) {
        console.log(err)
      }
    }
  }

  updateLoggedInUser = (user) => {
    this.setState({
      loggedInUser: user
    })
  }
  
  displayUser = (userId) => {
    this.setState({
      displayedUser: userId
    })  
  }


  render() {
    console.log("state in app.js below:");
    console.log(this.state);
    return (
      <div className="App">
        <main>
          <Switch>
            <Route 
              exact path='/users' 
              render={(props) => 
                <UsersContainer {...props} 
                  displayedUser={this.state.displayedUser}
                  loggedIn={this.state.loggedIn} 
                  toggleLogin={this.toggleLogin}
                  username={this.state.username}
                  user={this.state.loggedInUser}
                  updateLoggedInUser={this.updateLoggedInUser}
                /> 
              } 
            />
            <Route 
              exact path='/books' 
              render={(props) =>
                <BookContainer {...props}
                  displayUser={this.displayUser}
                  loggedIn={this.state.loggedIn}
                  toggleLogin={this.toggleLogin}
                  username={this.state.username}
                /> 
              }
            />
          </Switch>
        </main>
      
      </div>
    )
  }
}

export default App;

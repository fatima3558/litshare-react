import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom' 
import UsersContainer from './UsersContainer';
import BookContainer from './BookContainer';
import Header from './Header';
import Footer from './Footer';
import RequestsContainer from './RequestsContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: 'Guest',
      loggedInUser: {}
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

  getUserInfo = async () => {
    //method after books component renders to get user info and set login
        console.log("getting user info here");
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
                  loggedIn={this.state.loggedIn} 
                  toggleLogin={this.toggleLogin}
                  username={this.state.username}
                  user={this.state.loggedInUser}
                /> 
              } 
            />
            <Route 
              exact path='/books' 
              render={(props) =>
                <BookContainer {...props}
                  loggedIn={this.state.loggedIn}
                  toggleLogin={this.toggleLogin}
                  username={this.state.username}
                /> 
              }
            />
            <Route exact path='/requests' component={RequestsContainer} user={this.state.loggedInUser} />
          </Switch>
        </main>
      
      </div>
    )
  }
}

export default App;

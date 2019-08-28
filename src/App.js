import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom' 
import UsersContainer from './UsersContainer';
import BookContainer from './BookContainer';
// import Header from './Header';
import Footer from './Footer';
import RequestsContainer from './RequestsContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: 'Guest',
      loggedInUser: {},
      displayedUser:null,
      displayUpload: false,
      keyword: '',
    }
  }

  welcome = () => {
    return(
      <div>
        <h1>Welcome to LITSHARE!</h1>
        <h3>Click on the link below to log in: </h3>
        <br/><br/><br/>
      </div>
    )
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
          await fetch(`${process.env.REACT_APP_API_URL}/users/logout`, {
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

  toggleUpload = () => {
    this.setState({
      displayUpload: this.state.displayUpload ? false : true,
      keyword:null,
      // oneBook: null
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
              exact path='/'
              render={this.welcome}
            />
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
                  toggleUpload={this.toggleUpload}
                  displayUser={this.displayUser}
                  loggedIn={this.state.loggedIn}
                  toggleLogin={this.toggleLogin}
                  username={this.state.loggedInUser.username}
                  displayUpload={this.state.displayUpload}
                /> 
              }
            />
            <Route 
              exact path='/requests'
              render={(props) => 
                <RequestsContainer {...props}
                toggleUpload={this.toggleUpload}
                displayUser={this.displayUser}
                loggedIn={this.state.loggedIn}
                toggleLogin={this.toggleLogin}
                username={this.state.loggedInUser.username}
                displayUpload={this.state.displayUpload}
                user={this.state.loggedInUser}
              />
            }
            />
          </Switch>
        </main>
        <Footer 
          toggleUpload={this.toggleUpload}
          loggedIn={this.state.loggedIn}
        />
      </div>
    )
  }
}

export default App;

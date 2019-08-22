import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom' 
import UsersContainer from './UsersContainer';
import BookContainer from './BookContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/users' component={ UsersContainer } />
          <Route exact path='/books' component={ BookContainer } />
        </Switch>
      </main>
    )
  }
}

export default App;

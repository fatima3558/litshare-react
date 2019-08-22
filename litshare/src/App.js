import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import UsersContainer from './UsersContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
      <Header />
      <UsersContainer />
      </div>
    )
  }
}

export default App;

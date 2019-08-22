import React, { Component } from 'react';
import './App.css';
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
      <UsersContainer />
      </div>
    )
  }
}

export default App;

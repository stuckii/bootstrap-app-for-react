import React, { Component } from 'react';
import logo from './logo.svg';
import Todos from './components/Todos'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Todos />
      </div>
    );
  }
}

export default App;

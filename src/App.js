import React, { Component } from 'react';
import './App.scss';
import Header from './Header.js';
import Filter from './Filter.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Filter />
      </div>
    );
  }
}

export default App;

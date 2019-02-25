import React, { Component } from 'react';
import './App.scss';
import Header from './Header.js';
import Filter from './Filter.js';
import Content from './Content.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="content-area">
          <Filter />
          <Content />
        </section>
      </div>
    );
  }
}

export default App;

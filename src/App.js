import React, { Component } from 'react';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Cards />
      </>
    );
  }
}

export default App;


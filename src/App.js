import React, { Component } from 'react';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './App.css';

const store = configureStore();


class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Header />
          <Cards />
        </Provider>
    );
  }
}

export default App;


import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Movies from './components/Movies';
import MoviesEdit from './components/MoviesEdit';

import './App.scss';
import MovieInfo from './components/MovieInfo';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
          <Route exact path="/dashboard" component={Movies} />
          <Route exact path="/film/:id" component={MovieInfo} />
          <Route path="/film/:id/edit" component={MoviesEdit} />
        </Router>
      </Provider>
    );
  }
}

export default App;

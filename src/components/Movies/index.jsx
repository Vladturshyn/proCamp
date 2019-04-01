import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MoviesItem from './MoviesItem';
import { connect } from 'react-redux';
import { fetchMovies } from '../../redux/actions/movieAction';
import { words } from '../../constants';
import './movies.scss';

class Movies extends Component {

  componentDidMount(){
    const {results,fetchMovies} = this.props;
    if(!results.length) fetchMovies();
  }

  showFilmInfo = (id) =>{
    this.props.history.push(`/film/${id}`)
  }
  
  render() {
    const {results} = this.props;
    return (
      <>
        {results ? <MoviesItem data={results} showInfo={this.showFilmInfo}/> : <div>{words.loading}</div>}
      </>
    );
  }
}

Movies.propTypes = {
  results: PropTypes.array.isRequired,
  fetchMovies: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  return {
    results: state.movie.results,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);
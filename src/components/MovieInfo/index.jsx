import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { words } from '../../constants';
import MoviesItem from '../Movies/MoviesItem';

class MovieInfo extends Component {
  showFilmInfo = id => {
    this.props.history.push(`/film/${id}`);
  };

  render() {
    const { results } = this.props;
    const { id } = this.props.match.params;
    const data = results.find(film => film.id.toString() === id);
    return (
      <>
        <Link
          to='/dashboard'
          className='short-card__link short-card__link--left'
        >
          &laquo; {words.previous}
        </Link>
        <div key={data.id} className='info-wrapper'>
          <div className='short-card__img'>
            <img
              src={`https://image.tmdb.org/t/p/w185/${data.poster_path}`}
              alt='img'
            />
          </div>
          <div className='short-card__info'>
            <h2 className='short-card__title'>{data.title}</h2>
            <p className='short-card__description'>{data.overview}</p>
            <p>
              {words.title}
              {data.original_title}
            </p>
            <p>
              {words.releaseDate}
              {data.release_date}
            </p>
            <p>
              {words.OriginalLanguage}
              {data.original_language}
            </p>
            <Link to={`/film/${id}/edit`} className='short-card__link'>
              {words.edit}
            </Link>
          </div>
        </div>
        <div className='card-info-wrap'>
          <MoviesItem
            data={results
              .filter(films => films.id.toString() !== id)
              .slice(0, 3)}
            showInfo={this.showFilmInfo}
          />
        </div>
      </>
    );
  }
}

MovieInfo.propTypes = {
  results: PropTypes.array.isRequired
}

const mapStateToProps = state => {
  return {
    results: state.movie.results
  };
};

export default connect(mapStateToProps)(MovieInfo);
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '../Button';
import { words } from '../../constants/index';
import { editFilmData } from '../../redux/actions/movieAction';

class MoviesEdit extends Component {
  submitChanges = e => {
    const { id } = this.props.match.params;
    const { results } = this.props;
    let obj = {};
    e.preventDefault();
    const editForm = document.getElementById('editForm');
    results.map(element => {
      if (element.id.toString() === id) {
        Object.assign(obj, {
          id,
          title: editForm.dataTitle.value,
          overview: editForm.dataDescription.value
        });
      }
      return null;
    });
    this.props.editFilmData(obj);
    this.props.history.push(`/film/${id}`);
  };

  render() {
    const { results } = this.props;
    const { id } = this.props.match.params;
    const data = results.find(film => film.id.toString() === id);
    return (
      <>
        <Link
          to={`/film/${this.props.match.params.id}`}
          className='short-card__link short-card__link--left'
        >
          &laquo; Previous
        </Link>
        <Link
          to={'/dashboard'}
          className='short-card__link short-card__link--left'
        >
          {words.dashboard}
        </Link>
        <div key={data.id} className='edit-wrap'>
          <div className='short-card__img'>
            <img
              src={`https://image.tmdb.org/t/p/w185/${data.poster_path}`}
              alt='img'
            />
          </div>
          <div className='short-card__info'>
            <form id='editForm' onSubmit={this.submitChanges}>
              <input name='dataTitle' defaultValue={data.title} type='text' />
              <textarea
                name='dataDescription'
                defaultValue={data.overview}
                type='text'
              />
              <Button
                onClick={this.submitChanges}
                className={'--margin'}
                text={words.save}
              />
              <Link to={`/film/${id}`} className='short-card__link'>
                {words.exit}
              </Link>
            </form>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editFilmData: obj => dispatch(editFilmData(obj))
  };
};

const mapStateToProps = state => {
  return {
    results: state.movie.results
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesEdit);

import * as actionTypes from './actionTypes';
import ServiceApi from '../../service';


export const fetchMovies = () => {
  return dispatch => {
    dispatch(fetchMovieRequest());
    return ServiceApi.getItems().then(response => {
      if (response.status === 200) {
        response.json().then(data => {
          dispatch(fetchMovieSuccess(data.results));
        });
      } else {
        response.json().then(error => {
          dispatch(fetchMovieFailed(error));
        });
      }
    });
  };
};

export const fetchMovieRequest = () => {
  return {
    type: actionTypes.NEW_MOVIE_REQUEST,
  };
};


export const fetchMovieSuccess = (data) => {
  return {
    type: actionTypes.FETCH_MOVIE_SUCCESS,
    data
  };
};

export const fetchMovieFailed = error => {
  return {
    type: actionTypes.FETCH_MOVIE_FAILED,
    error,
  };
};

export const editFilmData = (obj) => {
  return{
    type: actionTypes.EDIT_MOVIE,
    obj
  }
}
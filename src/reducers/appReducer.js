import * as actionTypes from '../actions/actionTypes';

const initialState = {
    results:[]
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        results: action.data
      };

    case actionTypes.FETCH_MOVIE_FAILED:
      return {
        ...state
      };

    default:
      return initialState;
  }
};

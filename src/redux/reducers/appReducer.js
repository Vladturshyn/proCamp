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
    case actionTypes.EDIT_MOVIE:
     const index = state.results.findIndex(film => film.id.toString() === action.obj.id);
      if(!(index === -1)) {
          state.results[index] = {...state.results[index],...action.obj};
       }
    return {
      ...state
    };
    default:
      return initialState;
  }
};

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import searchMovieReducer from './searchMovieReducer';

export default combineReducers({
  auth: authReducer,
  searchMovie: searchMovieReducer,
  form: formReducer,
});

import omdb from '../api/omdb';
import favorites from '../api/favorites';
import {
  SIGN_IN,
  SIGN_OUT,
  LIST_MOVIES,
  CREATE_MOVIE,
  READ_MOVIES,
  READ_MOVIE,
  UPDATE_MOVIE,
  DELETE_MOVIE,
} from './types';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const listMovies = (searchValue) => async (dispatch) => {
  const response = await omdb.get('', {
    params: {
      s: searchValue,
    },
  });

  dispatch({
    type: LIST_MOVIES,
    payload: response.data.Search,
  });
};

export const createMovies = (favObj) => async (dispatch, getState) => {
  const { userId } = getState().auth;

  const response = await favorites.post('/favorites', { ...favObj, userId });

  dispatch({
    type: CREATE_MOVIE,
    payload: response.data,
  });
};

export const readMovies = () => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await favorites.get(`/favorites`, {
    params: {
      userId,
    },
  });

  dispatch({
    type: READ_MOVIES,
    payload: response.data,
  });
};

export const readMovie = (id) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await favorites.get(`/favorites/${id}`);

  if (response.data.userId !== userId) {
    return (response.data = { Error: 'Not found!' });
  }

  dispatch({
    type: READ_MOVIE,
    payload: response.data,
  });
};

export const deleteMovie = (id) => async (dispatch) => {
  await favorites.delete(`/favorites/${id}`);

  dispatch({
    type: DELETE_MOVIE,
    payload: id,
  });
};

import omdb from '../api/omdb';
import favorites from '../api/favorites';
import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT,
  JUMBOTRON,
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
//
export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const jumbotron = (pathname) => async (dispatch, getState) => {
  let textData;

  if (pathname === '/') {
    textData = {
      display: '. Search and click to add more!',
      lead: 'Click posters to add to your favorites.',
      paragraph:
        'A movie (or series, games, etc.) searching app! Sign in with your Google account, save your favorites, and add your reaction essay. This app is using OMDb API (The Open Movie Database). It is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by their users.',
    };
  } else if (pathname === '/favorites') {
    textData = {
      display: ' here!',
      lead: 'Click the poster image to view details.',
      paragraph:
        'This app is inspired by YTS (aka YIFY). It is practically became an overnight sensation among movie geeks by hosting high-quality torrents of recently released movies.',
    };
  }

  dispatch({
    type: JUMBOTRON,
    payload: textData,
  });
};

export const listMovies = (searchValue) => async (dispatch) => {
  const response = await omdb.get('', {
    params: {
      s: searchValue,
    },
  });

  if (response.data.Error) {
  }

  dispatch({
    type: LIST_MOVIES,
    payload: response.data,
  });

  history.push('/');
};

export const createMovies = (favObj) => async (dispatch, getState) => {
  let { userId } = getState().auth;

  if (!userId) {
    userId = 0;
  }

  const response = await favorites.post('/favorites', {
    ...favObj,
    userId,
    reaction: '',
  });

  dispatch({
    type: CREATE_MOVIE,
    payload: response.data,
  });
};

export const readMovies = () => async (dispatch, getState) => {
  let { userId } = getState().auth;

  if (!userId) {
    userId = 0;
  }

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

export const readMovie = (_id) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await favorites.get(`/favorites/${_id}`);

  if (response.data.userId !== userId) {
    return (response.data = { Error: 'Not found!' });
  }

  dispatch({
    type: READ_MOVIE,
    payload: response.data,
  });
};

export const updateMovie = (_id, formValues) => async (dispatch) => {
  const response = await favorites.patch(`favorites/${_id}`, formValues);

  dispatch({
    type: UPDATE_MOVIE,
    payload: response.data,
  });

  // history.push('/favorites');
  history.goBack();
};

export const deleteMovie = (_id) => async (dispatch) => {
  await favorites.delete(`/favorites/${_id}`);

  dispatch({
    type: DELETE_MOVIE,
    payload: _id,
  });
};

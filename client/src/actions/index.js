import omdb from '../api/omdb';
import { SIGN_IN, SIGN_OUT, LIST_MOVIES } from './types';

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
    payload: response.data,
  });
};

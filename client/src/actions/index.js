import omdb from '../api/omdb';
import { LIST_MOVIES } from './types';

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

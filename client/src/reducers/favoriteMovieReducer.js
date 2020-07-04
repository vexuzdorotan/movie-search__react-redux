import _ from 'lodash';

import { READ_MOVIES, READ_MOVIE } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case READ_MOVIES:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case READ_MOVIE:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

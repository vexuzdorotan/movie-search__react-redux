import _ from 'lodash';

import {
  CREATE_MOVIE,
  READ_MOVIES,
  READ_MOVIE,
  UPDATE_MOVIE,
  DELETE_MOVIE,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_MOVIE:
      return { ...state, [action.payload._id]: action.payload };
    case READ_MOVIES:
      return { ...{}, ..._.mapKeys(action.payload, '_id') };
    case READ_MOVIE:
      return { ...state, [action.payload._id]: action.payload };
    case UPDATE_MOVIE:
      return { ...state, [action.payload._id]: action.payload };
    case DELETE_MOVIE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

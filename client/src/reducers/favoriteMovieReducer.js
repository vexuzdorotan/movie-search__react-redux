import { READ_MOVIES } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case READ_MOVIES:
      return action.payload;
    default:
      return state;
  }
};

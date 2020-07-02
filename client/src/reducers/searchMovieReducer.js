import { LIST_MOVIES } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case LIST_MOVIES:
      return action.payload;
    default:
      return state;
  }
};

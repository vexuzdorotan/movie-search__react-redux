import { LIST_MOVIES } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case LIST_MOVIES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

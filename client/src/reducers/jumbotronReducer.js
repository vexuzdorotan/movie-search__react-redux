import { JUMBOTRON } from '../actions/types';

const INITIAL_STATE = {
  display: '',
  lead: '',
  paragraph: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case JUMBOTRON:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

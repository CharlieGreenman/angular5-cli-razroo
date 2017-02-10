import * as types from "../constants/ActionTypes";

const initialState = {
  show: 'show'
};

export const environment = (state = initialState, action) => {
  switch(action.type) {
    case types.HIDE:
      return Object.assign({}, state, {
        show: action.show
      });
    case types.SHOW:
      return Object.assign({}, state, {
        show: action.show
      });
    default:
      return state;
  }
};

import * as types from "../constants/ActionTypes";

import { Action } from '@ngrx/store';

const initialState = {
  show: false
};

export const environment = (state = initialState, action: Action) => {
  switch(action.type) {
    case types.HIDE:
      return Object.assign({}, state, {
        show: action.hide
      });
    case types.SHOW:
      return Object.assign({}, state, {
        show: action.show
      });
    default:
      return state;
  }
};

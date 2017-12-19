import * as types from "../constants/ActionTypes";

import {ActionReducer, Action} from "@ngrx/store";

export interface IInitialState = {
  show: boolean
};

const initialState: IInitialState = {
  show: false
};

export const environment: ActionReducer<IInitialState> = (state = initialState, action: Action) => {
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

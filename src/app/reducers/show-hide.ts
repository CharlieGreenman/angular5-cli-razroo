import * as types from "../constants/ActionTypes";

import {ActionReducer, Action} from "@ngrx/store";

import { BlockActions } from "../actions/show-hide";

export interface IInitialState {
  show: boolean;
}

const initialState: IInitialState = {
  show: false
};

export const environment: ActionReducer<IInitialState> = (state = initialState, action: BlockActions): IInitialState => {
  switch(action.type) {
    case types.TOGGLE:
      return Object.assign({}, state, {
        show: action.payload.show
      });
    default:
      return state;
  }
};

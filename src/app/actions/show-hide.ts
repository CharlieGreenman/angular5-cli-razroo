import * as types from "../constants/ActionTypes";
import { Action } from '@ngrx/store';
import { IShowHide } from '../models/showHide';

export class toggleBlock implements Action {
  readonly type = types.TOGGLE;

  constructor(public payload: IShowHide) {};
}

export type BlockActions
  = toggleBlock;


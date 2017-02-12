import * as types from "../constants/ActionTypes";

export function showBlock() {
    return {
        type: types.SHOW,
        show: true
    };
}

export function hideBlock() {
    return {
        type: types.HIDE,
        show: false
    };
}

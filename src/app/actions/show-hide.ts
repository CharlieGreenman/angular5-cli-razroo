import * as types from "../constants/ActionTypes";

export function showBlock() {
    return {
        type: types.SHOW,
        show: "show"
    };
}

export function hideBlock() {
    return {
        type: types.HIDE,
        show: "hide"
    };
}

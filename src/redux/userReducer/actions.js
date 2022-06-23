
import * as types from "./actionTypes";

export const registerStart = () => ({
    type: types.REGISTER_START,
});

export const registerSuccess = (user) => ({
    type: types.REGISTER_SUCCESS,
    payload:user,
});

//============================================================
export const loginStart = () => ({
    type: types.LOGIN_START,
});

export const loginSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload:user,
});

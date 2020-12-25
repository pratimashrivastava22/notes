import { makeActionCreator } from './index';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const login = makeActionCreator(LOGIN);
export const loginSuccess = makeActionCreator(LOGIN_SUCCESS);
export const setLoginError = makeActionCreator(LOGIN_ERROR);

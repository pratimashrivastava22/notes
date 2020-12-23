import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from '../Actions/Login';
const initialState = {
  username: '',
  password: '',
  user: null,
  loginError: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload.user};
    case LOGIN_ERROR:
      return { ...state, loginError: action.payload.loginError};
    default:
      return state;
  }
}
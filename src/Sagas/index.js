import { take, call, put, fork } from 'redux-saga/effects';
import { LOGIN, loginSuccess, loginError } from '../Actions/Login';
import services from '../Services';

function* watchLogin() {
  while (true) {
    let action = yield take(LOGIN);
    const { username, password } = action.payload;
    let { json, response } = yield call(services.login, { username, password });
    json = action.payload;
    if (json) {
      yield put(loginSuccess({ user: json }));
    } else {
      const error = { message: 'Username or password is wrong'};
      yield put(loginError(error));
    }
  }
}

export default function* root() {
  yield fork(watchLogin);
}


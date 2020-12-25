import { take, call, put, fork } from 'redux-saga/effects';
import { LOGIN, loginSuccess, setLoginError } from '../Actions/Login';
import services from '../Services';

function* watchLogin() {
  while (true) {
    let action = yield take(LOGIN);
    const { username, password } = action.payload;
    let { json, response } = yield call(services.login, { username, password });
    if (json && response.ok) {
      yield put(loginSuccess({ user: json }));
    } else {
      yield put(setLoginError({ loginError: json.message }));
    }
  }
}

export default function* root() {
  yield fork(watchLogin);
}


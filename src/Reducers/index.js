'use strict';

import { combineReducers } from 'redux';
import loginState from './Login';
import notesState from './Notes';

const appReducer = combineReducers({
  loginState,
  notesState,
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
};

export default rootReducer;

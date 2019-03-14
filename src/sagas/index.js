import { all, takeEvery } from 'redux-saga/effects';

import { types as startupTypes } from '../reducers/startup';
import { types as userTypes } from '../reducers/user';
import { types as snippetTypes } from '../reducers/snippet';

import * as blockstack from 'blockstack';

import {
  checkForUser,
  callLogin,
  callLogout,
  handlePendingSignIn,
} from './login';

import {
  saveSnippet,
  getSnippet,
} from './snippet';

export default function* rootSaga() {
  yield all([
    takeEvery(startupTypes.STARTUP, checkForUser, blockstack),

    takeEvery(userTypes.LOG_IN, callLogin, blockstack),
    takeEvery(userTypes.LOG_OUT, callLogout, blockstack),
    takeEvery(userTypes.HANDLE_PENDING_SIGN_IN, handlePendingSignIn, blockstack),

    takeEvery(snippetTypes.SAVE_SNIPPET, saveSnippet, blockstack),
    takeEvery(snippetTypes.RETRIEVE_SNIPPET, getSnippet, blockstack),
  ]);
};

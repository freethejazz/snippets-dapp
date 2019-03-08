import { call, put } from 'redux-saga/effects';

import { actions } from '../reducers/user';

export function* checkForUser(blockstack) {
  if (blockstack.isUserSignedIn()) {
    const user = blockstack.loadUserData();
    yield put(actions.setUserProfile(user));
  }
}
export function* callLogin(blockstack) {
  const appConfig = new blockstack.AppConfig(undefined, undefined, '/callback');
  const userSession = new blockstack.UserSession({ appConfig })
  yield call(userSession.redirectToSignIn.bind(userSession));
}

export function* callLogout(blockstack) {
  yield call(blockstack.signUserOut.bind(blockstack), '/');
}

export function* handlePendingSignIn(blockstack) {
  try {
    const user = yield call(blockstack.handlePendingSignIn.bind(blockstack));
    yield put(actions.setUserProfile(user))
  } catch (e) {
    yield put(actions.userSignInFailed())
  }
}

import { call, put, select } from 'redux-saga/effects';

import { actions } from '../reducers/snippet';

const filename = 'snippet.json';

export function* saveSnippet(blockstack) {
  const { name, snippet } = yield select((s) => s.snippet);

  try {
    yield call(blockstack.putFile.bind(blockstack), filename, JSON.stringify({ name, snippet }));
    yield put(actions.snippetSaved());
  } catch (e) {
    yield put(actions.snippetSaveError(e));
  }
}
export function* getSnippet(blockstack) {
  try {
    let fileString = yield call(blockstack.getFile.bind(blockstack), filename);
    yield put(actions.snippetRetrieved(JSON.parse(fileString)));
  } catch (e) {
    yield put(actions.snippetRetrieveError(e));
  }
}

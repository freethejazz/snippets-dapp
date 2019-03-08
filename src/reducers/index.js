import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import userReducer from './user';
import snippetReducer from './snippet';

const rootReducer = combineReducers({
  router: routerReducer,
  user: userReducer,
  snippet: snippetReducer,
});

export default rootReducer;

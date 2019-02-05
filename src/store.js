import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import { hashHistory } from 'react-router';
import * as reducers from './reducers';
import { INIT_APP, validateUser } from './actions/account_action';
import apiMiddleware from './middleware/api';

const hashMiddleware = routerMiddleware(hashHistory);

const store = createStore(
  combineReducers({
      ...reducers,
      routing: routerReducer,
    }),
  compose(
    applyMiddleware(apiMiddleware),
    applyMiddleware(hashMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

const init = () => {
  const token = localStorage.token !== undefined ? localStorage.token : 'eyJhbGciOiJIUzUxMiJ9';
  store.dispatch(INIT_APP);
  store.dispatch(validateUser(token));
};

const history = syncHistoryWithStore(hashHistory, store, {
  selectLocationState: (state) => state.routing,
});

init();

export default store;
export { history };

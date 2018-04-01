import thunk from 'redux-thunk';
import reducer from 'app/reducers';
import createLogger  from 'redux-logger';
import { createStore ,applyMiddleware } from 'redux';
export const store = createStore(reducer,applyMiddleware(thunk,createLogger));
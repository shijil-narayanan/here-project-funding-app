
import { combineReducers } from 'redux';
import fundLists from './fund-analysis-reducer';
import commonHandler from './common-handler';
const rootReducer = combineReducers({
  fundLists,
  commonHandler
})

export default rootReducer;
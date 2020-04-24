import { combineReducers } from 'redux';
import ui from './stores/ui';
import sign from './stores/sign';

const rootReducer = combineReducers({
  ui,
  sign
})

export default rootReducer
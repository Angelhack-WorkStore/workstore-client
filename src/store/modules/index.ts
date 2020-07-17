import {combineReducers} from 'redux';
import registration from './registration';
import authentication from './authentication';

const rootReducer = combineReducers({
  registration,
  authentication
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
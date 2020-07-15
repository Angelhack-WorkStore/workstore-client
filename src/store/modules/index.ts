import {combineReducers} from 'redux';
import registration from './registration';
import auth from './auth';

const rootReducer = combineReducers({
  registration,
  auth
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
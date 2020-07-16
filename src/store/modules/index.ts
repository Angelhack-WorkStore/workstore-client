import {combineReducers} from 'redux';
import registration from './registration';

const rootReducer = combineReducers({
  registration,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
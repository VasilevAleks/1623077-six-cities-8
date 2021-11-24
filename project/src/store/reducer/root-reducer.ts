import { combineReducers } from 'redux';
import { dataReducer } from './data-reducer';
import { mainReducer } from './main-reducer';
import { userReducer } from './user-reducer';

export enum NameSpace {
  data = 'DATA',
  user = 'USER',
  main = 'MAIN',
}

export const rootReducer = combineReducers({
  [NameSpace.user]: userReducer,
  [NameSpace.main]: mainReducer,
  [NameSpace.data]: dataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

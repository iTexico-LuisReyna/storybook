import { ITaskState } from '../../interfaces/task-state.interface';

import { combineReducers } from 'redux';

import { taskReducer } from './task.reducer';

export interface IAppState {
  tasks: ITaskState;
}

export const RootReducer = combineReducers<IAppState>({
  tasks: taskReducer,
});

import { IAction } from '../../interfaces/action.interface';
import { ITaskState } from '../../interfaces/task-state.interface';
import { TaskType } from '../../types/task.type';

import { ARCHIVE_TASK, PIN_TASK } from '../actions/action-types';

const INITIAL_STATE = {
  tasks: [
    { id: '1', title: 'Something', state: 'TASK_INBOX' },
    { id: '2', title: 'Something more', state: 'TASK_INBOX' },
    { id: '3', title: 'Something else', state: 'TASK_INBOX' },
    { id: '4', title: 'Something again', state: 'TASK_INBOX' },
  ],
};

const mapTaskState = (task: TaskType, action: IAction, state: string) =>
  task.id === action.payload.id ? { ...task, state } : task;

export const taskReducer = (state: ITaskState = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case ARCHIVE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => mapTaskState(task, action, 'TASK_ARCHIVED')),
      };
    case PIN_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => mapTaskState(task, action, 'TASK_PINNED')),
      };
    default:
      return state;
  }
};

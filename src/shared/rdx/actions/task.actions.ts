import { ARCHIVE_TASK, PIN_TASK } from './action-types';

export const pinTask = (id: string) => ({ type: PIN_TASK, id });

export const archiveTask = (id: string) => ({ type: ARCHIVE_TASK, id });

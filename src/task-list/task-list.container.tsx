import React from 'react';

import { ITaskState } from '../shared/interfaces/task-state.interface';
import { TaskType } from '../shared/types/task.type';

import { connect } from 'react-redux';
import { pinTask, archiveTask } from '../shared/rdx/actions/task.actions';

import { Task } from '../task/task.component';

type TaskListProps = {
  loading?: boolean;
  tasks: TaskType[];
  handlePinTask: Function;
  handleArchiveTask: Function;
};

export const TaskListComponent = ({ loading, tasks, handlePinTask, handleArchiveTask }: TaskListProps) => {
  const events = {
    handlePinTask,
    handleArchiveTask,
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }

  const tasksInOrder = [
    ...tasks.filter(t => t.state === 'TASK_PINNED'),
    ...tasks.filter(t => t.state !== 'TASK_PINNED'),
  ];

  return (
    <div className="list-items">
      {tasksInOrder.map(task => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
};

TaskListComponent.defaultProps = {
  loading: false,
};

const mapStateToProps = (state: ITaskState) => ({
  tasks: state.tasks.filter(t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'),
});

export const TasksListContainer = connect(
  mapStateToProps,
  { handlePinTask: pinTask, handleArchiveTask: archiveTask },
)(TaskListComponent);

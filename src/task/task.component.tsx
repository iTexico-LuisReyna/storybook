import React from 'react';

import { TaskType } from '../shared/types/task.type';

type TaskProps = {
  task: TaskType;
  handleArchiveTask: Function;
  handlePinTask: Function;
};

export const Task = ({
  task: { id, title, state },
  handleArchiveTask,
  handlePinTask,
}: TaskProps) => {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => handleArchiveTask(id)} />
      </label>
      <div className="title">
        <input type="text" value={title} readOnly={true} placeholder="Input title" />
      </div>

      <div className="actions" onClick={event => event.stopPropagation()}>
        {state !== 'TASK_ARCHIVED' && (
          <a onClick={() => handlePinTask(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
};

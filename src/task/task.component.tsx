import React from 'react';

type TaskProps = {
  task: {
    id: string;
    title: string;
    state: string;
    updatedAt?: Date;
  };
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

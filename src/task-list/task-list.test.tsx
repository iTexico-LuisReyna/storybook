import React from 'react';
import ReactDOM from 'react-dom';

import { TaskListComponent } from './task-list.container';

import { withPinnedTasks } from './task-list.stories';

it('renders pinned tasks at the start of the list', () => {
  const div = document.createElement('div');
  const events = { handlePinTask: jest.fn(), handleArchiveTask: jest.fn() };

  ReactDOM.render(<TaskListComponent tasks={withPinnedTasks} {...events} />, div);

  // We expect the task titled "Task 6 (pinned)" to be rendered first, not at the end
  const lastTaskInput = div.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"]');
  expect(lastTaskInput).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});

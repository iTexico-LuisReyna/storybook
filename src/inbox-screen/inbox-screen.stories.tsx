import React from 'react';

import { Provider } from 'react-redux';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { InboxScreen } from './inbox-screen.container';
import { defaultTasks } from '../task-list/task-list.stories';

const store: any = {
  getState: () => {
    return {
      tasks: defaultTasks,
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch'),
};

storiesOf('InboxScreen', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('default', () => <InboxScreen />)
  .add('error', () => <InboxScreen error="Something" />);

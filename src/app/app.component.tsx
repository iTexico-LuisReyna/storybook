import React from 'react';

import { Provider } from 'react-redux';

import { store } from '../shared/rdx/store.config';

import { InboxScreen } from '../inbox-screen/inbox-screen.container';

import './app.styles.css';

export const AppComponent = () => {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
};

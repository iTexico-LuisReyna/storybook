import React from 'react';

import { connect } from 'react-redux';

import { TasksListContainer } from '../task-list/task-list.container';

export const InboxScreen = ({ error }: any) => {
  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <TasksListContainer />
    </div>
  );
};

InboxScreen.defaultProps = {
  error: null,
};

export const InboxScreenContainer = connect(({ error }: any) => ({ error }))(InboxScreen);

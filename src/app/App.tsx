import React from 'react';

import { Task } from '../task/task.component';

import './App.css';
import logo from '../logo.svg';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Task
        task={{
          id: '1',
          title: 'Test Task',
          state: 'TASK_INBOX',
          updatedAt: new Date(2018, 0, 1, 9, 0),
        }}
        handleArchiveTask={() => {}}
        handlePinTask={() => {}}
      />
    </div>
  );
};

export default App;

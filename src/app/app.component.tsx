import React, { SFC } from 'react';

import { ButtonComponent } from './button/button.component';

import './App.css';

export const AppComponent: SFC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ButtonComponent />
      </header>
    </div>
  );
};

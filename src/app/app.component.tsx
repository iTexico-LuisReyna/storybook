import React, { SFC } from 'react';

import { ButtonComponent } from './button/button.component';

import './app.styles.css';

export const AppComponent: SFC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ButtonComponent >RAWR <span role="img" aria-label="Dino" >🦖</span></ButtonComponent>
      </header>
    </div>
  );
};

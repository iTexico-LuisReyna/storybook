import React from 'react';
import './App.css';
import { ButtonComponent } from './Button/Button.component';

const App: React.FC = () => {
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

export default App;

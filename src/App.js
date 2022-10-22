import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import ThemeContext from './themeContext';
import ThemeChanger from './themeChanger';

function App() {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{
      theme, setTheme
    }}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          Learn <ThemeChanger />
        </header>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

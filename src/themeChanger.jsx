import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import ThemeContext from './themeContext';

function ThemeChanger() {
    return (
        <ThemeContext.Consumer>
            {({ theme, setTheme }) => (<>
                <h1>{theme}</h1>
                <button onClick={() => {
                    if (theme === 'light') {
                        setTheme('dark')
                    } else {
                        setTheme('light')
                    }
                }}>UBAH tema</button>
            </>)}
        </ThemeContext.Consumer>
    );
}

export default ThemeChanger;

import React, { useState } from 'react'
import { createContext } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light')

    const changeTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
            document.body.classList.add('dark')
        } else {
            setTheme('light')
            document.body.classList.remove('dark')
        }
    }

    return (
        <ThemeContext.Provider value={{ theme: theme, toggleTheme: changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

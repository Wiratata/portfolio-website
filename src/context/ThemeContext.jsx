
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(true);


    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDark(savedTheme === 'dark');
        } else {

            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setIsDark(prefersDark);
        }
    }, []);


    useEffect(() => {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');


        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(prev => !prev);
    };

    const theme = {
        isDark,
        toggleTheme,
        colors: {

            bg: {
                primary: isDark ? '#0a0a0a' : '#fafafa',
                secondary: isDark ? '#171717' : '#ffffff',
                tertiary: isDark ? '#262626' : '#f5f5f5',
            },

            text: {
                primary: isDark ? '#fafafa' : '#0a0a0a',
                secondary: isDark ? '#d4d4d4' : '#404040',
                tertiary: isDark ? '#a3a3a3' : '#737373',
            },

            accent: {
                primary: '#86A789',
                secondary: '#4A7C59',
                light: '#B2C9AD',
                dark: '#365946',
            },

            border: {
                light: isDark ? '#262626' : '#e5e5e5',
                medium: isDark ? '#404040' : '#d4d4d4',
                dark: isDark ? '#525252' : '#a3a3a3',
            }
        }
    };

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};
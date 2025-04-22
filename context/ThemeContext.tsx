import React, {createContext, useContext, useEffect, useState} from 'react';

type ThemeType = 'dark' | 'light';

interface ThemeContextType {
    theme: ThemeType;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: 'dark',
    toggleTheme: () => {
    },
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    // Initialize theme from localStorage if available, otherwise default to dark
    const [theme, setTheme] = useState<ThemeType>('dark');

    // Load theme from localStorage on initial render
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as ThemeType;
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    // Update document attributes when theme changes
    useEffect(() => {
        // Save theme to localStorage
        localStorage.setItem('theme', theme);

        // Add theme class to document body
        document.body.classList.remove('dark-theme', 'light-theme');
        document.body.classList.add(`${theme}-theme`);

        // Update meta theme-color
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
            metaThemeColor.setAttribute(
                'content',
                theme === 'dark' ? '#FFE240' : '#4da6ff'
            );
        }
    }, [theme]);

    // Toggle between dark and light themes
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
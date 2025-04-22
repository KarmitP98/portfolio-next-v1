import React from 'react';
import {useTheme} from '../../context/ThemeContext';
import Image from 'next/image';
import classes from './theme-selector.module.scss';

const ThemeSelector: React.FC = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <button
            className={classes.themeSelector}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            <Image
                src={`/assets/svg/${theme}/theme-selector.svg`}
                alt="Theme selector"
                width={24}
                height={24}
            />
            <span className={classes.text}>{theme.toString().toUpperCase()}</span>
        </button>
    );
};

export default ThemeSelector;

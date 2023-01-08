import React from 'react';
import Navbar from './Components/Navbar';
import useTheme from './Themes/Theme';
import { ThemeContext } from './Contexts';
import Router from './Router';

const BODY = window?.document?.body;

const handleBody = (theme) => {
    BODY.style.backgroundColor = theme?.palette?.white?.main;
    BODY.style.padding = '0px';
    BODY.style.margin = '0px';
    BODY.style.overflowX = 'hidden';
};

const App = () => {
    const theme = useTheme();
    handleBody(theme);

    return (
        <ThemeContext.Provider value={theme}>
            <Navbar />
            <Router />
        </ThemeContext.Provider>
    );
};

export default App;

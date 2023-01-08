import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from './Pages/Main';

const Router = () => {
    const navigate = useNavigate();

    React.useEffect(() => {
        navigate('/');
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Main />} />
        </Routes>
    );
};

export default Router;

import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import {HomeIndex} from "../../pages/main/components/HomeIndex";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/personal-portafolio" element={<HomeIndex />} />
            </Routes>
        </Router>
    );
};

export {AppRoutes};
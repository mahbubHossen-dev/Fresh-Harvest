import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            Main
            <Outlet />
        </div>
    );
};

export default MainLayout;
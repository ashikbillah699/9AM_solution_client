// import React, { useContext } from 'react';
import Navbar from '../sheard/Navbar';
// import { Outlet } from 'react-router-dom';
import Dashboard from '../sheard/Dashboard';
// import { AuthContext } from '../provider/AuthProvider';

const MainLayout = () => {
    
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <Dashboard></Dashboard>
            </div>
        </div>
    );
};

export default MainLayout;
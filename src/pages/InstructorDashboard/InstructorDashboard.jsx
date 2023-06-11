import React from 'react';
import { Outlet } from 'react-router-dom';

const InstructorDashboard = () => {
    return (
        <div>
            <h1>Instructor dashboard</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default InstructorDashboard;
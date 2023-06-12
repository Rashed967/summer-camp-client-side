import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <div className='mt-5'>
            <>
                <Button className='bg-blue-600 mb-6' type="primary" onClick={showDrawer}>
                    Open menu
                </Button>
                <Drawer title="Close menu" placement="left" onClose={onClose} open={open}>
                    <div className='border-b-2 pb-6'>
                        <h3 className='font-medium text-xl mb-4'>Studnet DashBoard</h3>
                        <ul className='space-y-2'>
                            <li><Link to="mySelectedClasses">My Selected Classes</Link></li>
                            <li><Link to="enrolledClass">Enrolled classes</Link></li>
                        </ul>

                    </div>
                    <div className='border-b-2 pb-6'>
                        <h3 className='font-medium text-xl mb-4'>Instructor DashBoard</h3>
                        <ul className='space-y-2'>
                            <li><Link to="addAClass">Add a class</Link></li>
                            <li><Link to="myClassInstructor">My Classes</Link></li>
                        </ul>

                    </div>
                    <div className='border-b-2 pb-6'>
                        <h3 className='font-medium text-xl mb-4'>Admin DashBoard</h3>
                        <ul className='space-y-2'>
                            <li><Link to="manageClasses">Manage classes</Link></li>
                            <li><Link to="manageUsers">Manage users</Link></li>
                        </ul>

                    </div>
                </Drawer>
            </>
            <Outlet></Outlet>
        </div>

    );
};

export default DashBoard;
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
      <Button className='bg-blue-600' type="primary" onClick={showDrawer}>
        Open menu
      </Button>
      <Drawer title="Close menu" placement="left" onClose={onClose} open={open}>
        <div className='border-b-2 pb-6'>
            <h3 className='font-medium text-xl mb-4'>DashBoard</h3>
        <ul className='space-y-2'>
            <li><Link>Admin Dashboard</Link></li>
            <li><Link>Instructor Dashboard</Link></li>
            <li><Link to="studentDashBoard">Student Dashboard</Link></li>
        </ul>
        </div>
      </Drawer>
    </>
    <Outlet></Outlet>
        </div>
        
    );
};

export default DashBoard;
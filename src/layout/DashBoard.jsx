import React, { useContext, useEffect, useState } from 'react';
import { Button, Drawer } from 'antd';
import { Link, Outlet } from 'react-router-dom';
// import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';

const DashBoard = () => {
    // const { user } = useContext(AuthContext);
    const {user, loading} = useContext(AuthContext)
    if(loading){
        <p>loading ..</p>
    }
    
    const [open, setOpen] = useState(false);


    const [userRole, setUserRole] = useState('');
    // console.log(userRole)

    useEffect(() => {
      // Fetch the user data from the server
      axios.get(`https://b7a12-summer-camp-server-side-rashed967.vercel.app/getUserRoll?email=${user?.email}`)
    //   zamakapersonal@gmail.com
    //   rashed@mail.com
        .then(response => {
          const userData = response.data;
          const role = userData.roll; // Assuming the role property is named 'role'
          console.log(role)
          setUserRole(role);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }, [user]);

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
                <>
      {userRole === 'student' && (
        <div className='border-b-2 pb-6'>
          <h3 className='font-medium text-xl mb-4'>Student Dashboard</h3>
          <ul className='space-y-2'>
            <li><Link to="mySelectedClasses">My Selected Classes</Link></li>
            <li><Link to="enrolledClass">Enrolled Classes</Link></li>
            <li><Link to="payment">Payment</Link></li>
          </ul>
        </div>
      )}

      {userRole === 'Instructor' && (
        <div className='border-b-2 pb-6'>
          <h3 className='font-medium text-xl mb-4'>Instructor Dashboard</h3>
          <ul className='space-y-2'>
            <li><Link to="addAClass">Add a Class</Link></li>
            <li><Link to="myClassInstructor">My Classes</Link></li>
          </ul>
        </div>
      )}

      {userRole === 'Admin' && (
        <div className='border-b-2 pb-6'>
          <h3 className='font-medium text-xl mb-4'>Admin Dashboard</h3>
          <ul className='space-y-2'>
            <li><Link to="manageClasses">Manage Classes</Link></li>
            <li><Link to="manageUsers">Manage Users</Link></li>
          </ul>
        </div>
      )}
    </>
                    
                </Drawer>
            </>
            <Outlet></Outlet>
        </div>

    );
};

export default DashBoard;
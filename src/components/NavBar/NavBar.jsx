import React, { useContext } from 'react';
import { Menu } from 'antd';
import { GiTeacher } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";
import { MdDashboard } from "react-icons/md";
import { HomeOutlined, UserOutlined, LoginOutlined  } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const NavBar = () => {
    const {user, logOut} = useContext(AuthContext)
    const handleLogout = () =>{
        logOut()
    }

    
    return (
        <Menu mode="horizontal" className=' text-xl mt-4 pb-4'>
        <Menu.Item key="art" >
         <Link to="/"> Art & Craft</Link>
        </Menu.Item>
        <Menu.Item key="home" icon={<HomeOutlined className='text-xl'/>}>
          Home
        </Menu.Item>
        <Menu.Item key="instructor" icon={<GiTeacher className='text-xl'/>}>
        Instructor
        </Menu.Item>
        <Menu.Item key="classes" icon={<SiGoogleclassroom className='text-xl'/>}>
            <Link to="/approvedClasses">Classes</Link>
        
        </Menu.Item>
        <Menu.Item key="dashboard" icon={<MdDashboard className='text-xl'/>}>
        <Link to="dashboard">Dashboard</Link>
        </Menu.Item>
        {
            user && <Menu.Item key="profile" icon={<UserOutlined className='text-xl'/>}>
            Profile
          </Menu.Item>
        }
       {
         user ? <Menu.Item key="logout" onClick={handleLogout} icon={<LoginOutlined className='text-xl'/>}>
         <Link to="/login">logout</Link>
       </Menu.Item>
       :  <Menu.Item key="login" icon={<LoginOutlined className='text-xl'/>}>
       <Link to="/login">Login</Link>
     </Menu.Item>
       }
      </Menu>
    );
};

export default NavBar;
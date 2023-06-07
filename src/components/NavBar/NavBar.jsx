import React from 'react';
import { Menu } from 'antd';
import { GiTeacher } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";
import { MdDashboard } from "react-icons/md";
import { HomeOutlined, UserOutlined, ShoppingCartOutlined,  } from '@ant-design/icons';

const NavBar = () => {
    return (
        <Menu mode="horizontal" className='text-xl mt-4 pb-4'>
        <Menu.Item key="art" >
          Art & Craft
        </Menu.Item>
        <Menu.Item key="home" icon={<HomeOutlined className='text-xl'/>}>
          Home
        </Menu.Item>
        <Menu.Item key="instructor" icon={<GiTeacher className='text-xl'/>}>
        Instructor
        </Menu.Item>
        <Menu.Item key="classes" icon={<SiGoogleclassroom className='text-xl'/>}>
        Classes
        </Menu.Item>
        <Menu.Item key="dashboard" icon={<MdDashboard className='text-xl'/>}>
        Dashboard
        </Menu.Item>
        <Menu.Item key="profile" icon={<UserOutlined className='text-xl'/>}>
          Profile
        </Menu.Item>
      </Menu>
    );
};

export default NavBar;
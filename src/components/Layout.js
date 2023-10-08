import React from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu from './SideMenu';

const Layout = () => {
  return (
    <div className='flex'>
      <SideMenu />
      <Outlet />
    </div>
  );
};

export default Layout;

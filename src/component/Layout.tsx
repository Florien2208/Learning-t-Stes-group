import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer';
import Navbar from '../pages/Navbar';

function Layout() {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          
          <Outlet />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Layout
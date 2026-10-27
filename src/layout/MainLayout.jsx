import React from 'react'
import Navbar from '../components/Navbar';
import {Outlet} from 'react-router';

const MainLayout = () => {
  console.log("Main layout");
  return (
    <div className="flex">
      <div>
       <Navbar/>
      </div>
      <div>
        <Outlet/>
      </div>
       
    </div>
  )
}

export default MainLayout

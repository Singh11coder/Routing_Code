import React from 'react'
import UserNavbar from '../components/UserNavbar'
import { Outlet } from 'react-router'

const UserLayout = () => {
  return (
    <div className="grid grid-cols-[1fr_5fr] p-2">
      <div className="w-50 border-r-2 h-screen">
        <UserNavbar/>
      </div>
       <div>
        <Outlet/>
       </div>
       
    </div>
  )
}

export default UserLayout

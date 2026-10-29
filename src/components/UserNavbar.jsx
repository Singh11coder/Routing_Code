import React from 'react'
import { Outlet, useNavigate } from 'react-router'


const UserNavbar = () => {
  let navigate = useNavigate();
  return (
    <div>
      <aside className="text-2xl text-blue-600 font-semibold pl-2">
         <h1 
         onClick={() => navigate("/main/users")}
         className="m-4 cursor-pointer">All Users</h1>

         <h1 
         onClick={() => navigate("/main/users/create")}
         className="m-4 cursor-pointer">Create User</h1>

         <h1 
         onClick={() => navigate("/main/users/remove")}
         className="m-4 cursor-pointer">Delete User</h1>
      </aside>
      
    </div>  
  )
}

export default UserNavbar

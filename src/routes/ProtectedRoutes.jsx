import React from 'react';
import { Outlet, useNavigate } from 'react-router';


const ProtectedRoutes = () => {
  let loggedInUser = JSON.parse(localStorage.getItem("loggedIn"));
  let navigate = useNavigate();
  if(!loggedInUser){
    navigate("/");
    return;
  }
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default ProtectedRoutes;

import React from 'react'
import { useState ,useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';

import './sidebar.css'

const Sidebar = () => {
  const [activeId2, setActiveId2] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Set the activeId2 based on the current location
    switch (location.pathname) {
      case '/profile':
        setActiveId2(1);
        break;
      case '/order':
        setActiveId2(2);
        break;
      case '/notification':
        setActiveId2(3);
        break;
      case '/myreviews':
        setActiveId2(4);
        break;
      case '/myaccount':
        setActiveId2(5);
        break;
      
      default:
        setActiveId2(null);
        break;
    }
  }, [location.pathname]);
  return (
    <div class="sidebar bg-dark text-white" style={{height:'100vh'}}>
    <ul class="nav flex-column">
      <li class="nav-item mt-4 ">
        <Link className="nav-link ms-4"  id={activeId2 === 1 ? 'sideactive' : ''} to="/profile"><i className='fa fa-tachometer-alt'></i>  My Dashboard</Link >
      </li>
      <li class="nav-item mt-4">
        <Link class="nav-link ms-4" id={activeId2 === 2 ? 'sideactive' : ''} to="/order"><i className='fa fa-history'></i>  Order History</Link >
      </li>
      <li class="nav-item mt-4">
        <Link class="nav-link ms-4" id={activeId2 === 3 ? 'sideactive' : ''}  to="/notification"><i className='fa fa-bell'></i>  Notifications</Link >
      </li>
      <li class="nav-item mt-4">
        <Link  class="nav-link ms-4" id={activeId2 === 4 ? 'sideactive' : ''} to="/myreviews"><i className='fa fa-star'></i>  My Reviews</Link>
      </li>
      <li class="nav-item mt-4">
        <Link class="nav-link ms-4" id={activeId2 === 5 ? 'sideactive' : ''} to="/myaccount"><i className='fa fa-cogs'></i>  Account Setting</Link >
      </li>
      
     
    </ul>
  </div>
  )
}

export default Sidebar
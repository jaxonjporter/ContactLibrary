import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header(){
  const { pathname } = useLocation()

  console.log(pathname)
  return (
    <div>
      <ul className="nav-ul">
        <li className={`nav-li`}><p className="app-name-p">Contact Library</p></li>
        <li className={`nav-li ${pathname === "/" && "active"}`}><Link to="/">Home</Link></li>
        <li className={`nav-li ${pathname === "/add" && "active"}`}><Link to="/add">Add New</Link></li>
      </ul>
    </div>
  )
}

export default Header

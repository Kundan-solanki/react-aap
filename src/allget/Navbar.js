import React from 'react';
import { Link } from 'react-router-dom';

export default function Role() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand fs-2 font-8" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      
       
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
    <Link className="navbar-brand fs-3 font-8" to="/login">Login</Link>
     
        <li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
        </li>
       


        <div className="dropdown ">
  <a className="btn  dropdown-toggle fs-5" to="#"   data-bs-toggle="dropdown" >
   Roles
  </a>

  <ul className="dropdown-menu" >
    <li><Link className="dropdown-item" to="/role">Listing</Link></li>
    <li><Link className="dropdown-item" to="/addrole">Insert </Link></li>
  </ul>
</div>

<div className="dropdown">
  <a className="btn  dropdown-toggle fs-5" to="#"   data-bs-toggle="dropdown" >
   Student
  </a>

  <ul className="dropdown-menu" >
    <li><Link className="dropdown-item" to="/student">Listing</Link></li>
    <li><Link className="dropdown-item" to="/addstudent">Insert </Link></li>
  </ul>
</div>

<div className="dropdown">
  <a className="btn  dropdown-toggle fs-5" to="#"   data-bs-toggle="dropdown" >
   Marksheet
  </a>

  <ul className="dropdown-menu" >
    <li><Link className="dropdown-item" to="/marksheet">Listing</Link></li>
    <li><Link className="dropdown-item" to="/addmarksheet">Insert </Link></li>
  </ul>
</div>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle fs-5" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Other link
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

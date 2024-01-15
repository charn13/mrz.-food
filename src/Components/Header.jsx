import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-dark'>
        <div className='container'>
            <div className='row'>
            <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" href="#"><img src="img/MR.-removebg-preview.png" alt="" className='logo' /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-white active" aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" href="/aboutus">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" href="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" href="/help">Help</Link>
        </li>
       
      </ul>


      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-white" aria-current="page" href="#">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" href="#">Sign Up</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" href="#">Cart</Link>
        </li>
       
      </ul>

    
    </div>



  </div>
</nav>
            </div>
        </div>
    </header>
  )
}

export default Header
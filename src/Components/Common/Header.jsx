import React from 'react'



export default function Header() {
  const 
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top border-bottom border-dark ">
  <a className="navbar-brand mb-2 mx-5 " href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse " id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto ms-auto   me-5">
      <li className="nav-item active">
        <a className="nav-link text-white" href="#">Home</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link text-white" href="#">About</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link text-white" href="#">Services</a>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Blog
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Pages
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      
      <li className="nav-item">
        <a className="nav-link text-white" href="#">Contact</a>
      </li>
    </ul>
    {/* <form className="form-inline my-2 my-lg-0 d-flex gap-3 ">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
     
     <button className='btn btn-primary rounded-0 me-5'>Download Pro Version</button>
  </div>
</nav>
    </>
  )
}

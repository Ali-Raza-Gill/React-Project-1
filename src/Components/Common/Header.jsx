import React from 'react'
import 'react-icons/fa'
import 'react-icons/bs'
import { BsFillPersonFill } from 'react-icons/bs'


export default function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand mb-2 mx-5" href="#"><BsFillPersonFill style={{ fontSize: "35px", marginTop: "-8px" }} className='text-center' />Startup</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Blog
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Services</a></li>
                  <li><a class="dropdown-item" href="#">Choise</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Price</a></li>
                </ul>
              </li>
            </ul>
            <button className='btn btn-primary rounded-0 me-5'>Download Pro Version</button>
          </div>
        </div>
      </nav>
    </>
  )
}

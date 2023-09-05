// import React, { useState } from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";



const Navbar = () => {
    const navigate = useNavigate()
    const handleShowLogin = () => {
        navigate('/login')
    }  
    const handleShowSignUp = () => {
        navigate('/signup')
    }  
    const handleShowComputer = () => {
        navigate('/courses')
      }
    const handleShowHairdressing = () => {
        navigate('/courses')
      }
    const handleShowFashion = () => {
        navigate('/courses')
      }
    const handleShowPhotography = () => {
        navigate('/courses')
      }
    const handleShowCatering = () => {
        navigate('/courses')
      }
    const handleShowTextile = () => {
        navigate('/courses')
      }
    const handleShowBarbing = () => {
        navigate('/courses')
      }
    const handleShowAdultliteracy = () => {
        navigate('/courses')
      }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarLeftAlignExample"
            aria-controls="navbarLeftAlignExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarLeftAlignExample">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle  btn-primary"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                Courses
                </a>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <span className="dropdown-item"  onClick={handleShowComputer}>
                      Computer
                    </span>
                  </li>
                  <li>
                    <span className="dropdown-item" onClick={handleShowCatering}>
                      Catering
                    </span>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <span className="dropdown-item"  onClick={handleShowPhotography}>
                      Photography
                    </span>
                  </li>
                  <li>
                    <span className="dropdown-item" onClick={handleShowFashion}>
                      Fashion
                    </span>
                  </li>
                  <li>
                    <span className="dropdown-item" onClick={handleShowTextile}>
                      Textile
                    </span>
                  </li>
                  <li>
                    <span className="dropdown-item" onClick={handleShowBarbing}>
                      Barbing
                    </span>
                  </li>
                  <li>
                    <span className="dropdown-item" onClick={handleShowAdultliteracy}>
                      Adult Literacy
                    </span>
                  </li>
                  <li>
                    <span className="dropdown-item" onClick={handleShowHairdressing}>
                    Hair Dressing
                    </span>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/">
                  Contact
                </a>
              </li>
              <li className="nav-item login-signup">
                  <button
                    className="btn btn-primary"
                    onClick={handleShowLogin}
                    
                  >
                    Login
                  </button>
              </li>
              <li className="nav-item login-signup btn-signup mx-3">
                <button
                  className="btn"
                  onClick={handleShowSignUp}
                  
                >
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  );
};
export default Navbar;

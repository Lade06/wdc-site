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
        navigate('/computer')
      }
    const handleShowHairdressing = () => {
        navigate('/hairdressing')
      }
    const handleShowFashion = () => {
        navigate('/fashion')
      }
    const handleShowPhotography = () => {
        navigate('/photography')
      }
    const handleShowCatering = () => {
        navigate('/catering')
      }
    const handleShowTextile = () => {
        navigate('/textile')
      }
    const handleShowBarbing = () => {
        navigate('/barbing')
      }
    const handleShowAdultliteracy = () => {
        navigate('/barbing')
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
                  Department
                </a>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <span className="dropdown-item  "  onClick={handleShowComputer}>
                      Computer
                    </span>
                  </li>
                  <li>
                    <a className="dropdown-item" href="catering" onClick={handleShowCatering}>
                      Catering
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="photography" onClick={handleShowPhotography}>
                      Photography
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="fashion" onClick={handleShowFashion}>
                      Fashion
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="textile" onClick={handleShowTextile}>
                      Textile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="barbing" onClick={handleShowBarbing}>
                      Barbing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="adultliteracy" onClick={handleShowAdultliteracy}>
                      Adult Literacy
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="hairdressing" onClick={handleShowHairdressing}>
                    Hair Dressing
                    </a>
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

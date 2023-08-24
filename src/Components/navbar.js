import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-success reduced-opacity{40%}">
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
                <a className="nav-link active  btn-light" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  btn-light" href="/">
                  About
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle  btn-danger"
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
                    <a className="dropdown-item  btn-danger" href="/">
                      Computer
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item  btn-danger" href="/">
                      Catering
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item  btn-danger" href="/">
                      Photography
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item  btn-danger" href="/">
                      Fashion
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item  btn-danger" href="/">
                      Textile
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link  btn-light" href="/">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

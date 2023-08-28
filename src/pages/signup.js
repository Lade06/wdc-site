import React from "react";
import { useNavigate } from "react-router-dom";



const SignUp = () => {
    const navigate = useNavigate();
const handleShowLogin = () => {
    navigate("/login")
}
    return(
        <div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4"></div>

            <div className="col-md-4">
              <form>
                <div className=" mb-4">
                  <h1 className="text-center">Register</h1>
                  <label className="form-label" htmlFor="registerName">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="registerName"
                    className="form-control"
                    required
                  />
                </div>

                <div className=" mb-4">
                  <label className="form-label" htmlFor="registerUsername">
                    Username
                  </label>
                  <input
                    type="text"
                    id="registerUsername"
                    className="form-control"
                    required
                  />
                </div>

                <div className=" mb-4">
                  <label className="form-label" htmlFor="registerEmail">
                    Email
                  </label>
                  <input
                    type="email"
                    id="registerEmail"
                    className="form-control"
                    required
                  />
                </div>

                <div className=" mb-4">
                  <label className="form-label" htmlFor="registerPassword">
                    Password
                  </label>
                  <input
                    type="password"
                    id="registerPassword"
                    className="form-control"
                    required
                  />
                </div>

                <div className=" mb-4">
                  <label
                    className="form-label"
                    htmlFor="registerRepeatPassword"
                  >
                    Repeat password
                  </label>

                  <input
                    type="password"
                    id="registerRepeatPassword"
                    className="form-control"
                    required
                  />
                </div>
                <div>
                  <p>
                    Don't have an email? Create one{" "}
                    <a
                      href="https://www.gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      here
                    </a>
                  </p>
                </div>

                {/* <div className="form-check d-flex justify-content-center mb-4">
         <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" 
           aria-describedby="registerCheckHelpText" />
         <label className="form-check-label" for="registerCheck">
           I have read and agree to the terms
         </label>
       </div>  */}

                <button
                  className="btn btn-primary btn-block form-control mb-3"
                  onClick={handleShowLogin}
                >
                  Sign up
                </button>
                <div className="text-center mt-4">
                  <p>
                    Already a member?{" "}
                    <a href="#!" onClick={handleShowLogin}>
                      Login
                    </a>
                  </p>
                </div>
              </form>
            </div>

            <div className="col-md-4"></div>
          </div>
        </div>
    
        </div>
    )
}
export default SignUp;
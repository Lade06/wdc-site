import React, { useState } from "react";
import Navbar from "./navbar";

const Login = () => {
  const [login, setLogin] = useState(true);
  const [signUp, setSignUp] = useState(false);

  const handleShowLogin = () => {
    setLogin(true);
    setSignUp(false);
  };
  const handleShowSignUp = () => {
    setLogin(false);
    setSignUp(true);
  };
  return (
    <div>
      <Navbar />
      {login && (
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>

            <div className="col-md-4 mt-5">
              <form>
                <h1 className="text-center">Welcome To WDC</h1>
                <div className="mb-4">
                  <label htmlFor="emailaddress">Email </label>
                  <input
                    type="email"
                    id="emailaddress"
                    placeholder="Example@gmail.com"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="psw">Password</label>
                  <input
                    type="password"
                    id="psw"
                    placeholder="*******"
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
                <div className="row mb-4">
                  <div className="col d-flex justify-content-center">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="form2Example31"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form2Example31"
                      >
                        {" "}
                        Remember me{" "}
                      </label>
                    </div>
                  </div>

                  <div className="col">
                    <a href="/">Forgot password?</a>
                  </div>
                </div>
                <button className="btn btn-primary btn-block form-control">
                  Login
                </button>
                <div className="text-center mt-4">
                  <p>
                    Don't have an account?{" "}
                    <a href="#!" onClick={handleShowSignUp}>
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>

            <div className="col-md-4"></div>
          </div>
        </div>
      )}
      {signUp && (
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
      )}
    </div>
  );
};
export default Login;

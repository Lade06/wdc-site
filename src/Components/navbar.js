// import React, { useState } from "react";
// import "./navbar.css";


// const Navbar = () => {
//   const [login, setLogin] = useState(false);
//   const [signUp, setSignUp] = useState(false);
  

//   const handleShowLogin = () => {
//     setLogin(true);
//     setSignUp(false);
    
//   };
//   const handleShowSignUp = () => {
//     setLogin(false);
//     setSignUp(true);
   
//   };
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-mdb-toggle="collapse"
//             data-mdb-target="#navbarLeftAlignExample"
//             aria-controls="navbarLeftAlignExample"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <i className="fas fa-bars"></i>
//           </button>

//           <div className="collapse navbar-collapse" id="navbarLeftAlignExample">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="/">
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/">
//                   About
//                 </a>
//               </li>

//               <li className="nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle  btn-primary"
//                   href="/"
//                   id="navbarDropdown"
//                   role="button"
//                   data-mdb-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Department
//                 </a>

//                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <li>
//                     <a className="dropdown-item  " href="/">
//                       Computer
//                     </a>
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="/">
//                       Catering
//                     </a>
//                   </li>
//                   <li>
//                     <hr className="dropdown-divider" />
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="/">
//                       Photography
//                     </a>
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="/">
//                       Fashion
//                     </a>
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="/">
//                       Textile
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link " href="/">
//                   Contact
//                 </a>
//               </li>
//               <li className="nav-item login-signup">
           
                  
//                   <button
//                     className=""
//                     onClick={handleShowLogin}
//                   >
//                     Login
//                   </button>
             
//               </li>
//               <li className="nav-item login-signup btn-signup mx-3">
//                 <button
//                   className="mt-3"
//                   onClick={handleShowSignUp}
//                 >
//                   Sign Up
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>


   
//       {login && (
//         <div className="container">
//           <div className="row">
//             <div className="col-md-4"></div>

//             <div className="col-md-4 mt-5">
//               <form>
//                 <h1 className="text-center">Welcome To WDC</h1>
//                 <div className="mb-4">
//                   <label htmlFor="emailaddress">Email </label>
//                   <input
//                     type="email"
//                     id="emailaddress"
//                     placeholder="Example@gmail.com"
//                     className="form-control"
//                     required
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label htmlFor="psw">Password</label>
//                   <input
//                     type="password"
//                     id="psw"
//                     placeholder="*******"
//                     className="form-control"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <p>
//                     Don't have an email? Create one{" "}
//                     <a
//                       href="https://www.gmail.com"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       here
//                     </a>
//                   </p>
//                 </div>
//                 <div className="row mb-4">
//                   <div className="col d-flex justify-content-center">
//                     <div className="form-check">
//                       <input
//                         className="form-check-input"
//                         type="checkbox"
//                         value=""
//                         id="form2Example31"
//                       />
//                       <label
//                         className="form-check-label"
//                         htmlFor="form2Example31"
//                       >
//                         {" "}
//                         Remember me{" "}
//                       </label>
//                     </div>
//                   </div>

//                   <div className="col">
//                     <a href="/">Forgot password?</a>
//                   </div>
//                 </div>
//                 <button className="btn btn-primary btn-block form-control">
//                   Login
//                 </button>
//                 <div className="text-center mt-4">
//                   <p>
//                     Don't have an account?{" "}
//                     <a href="#!" onClick={handleShowSignUp}>
//                       Register
//                     </a>
//                   </p>
//                 </div>
//               </form>
//             </div>

//             <div className="col-md-4"></div>
//           </div>
//         </div>
//       )}

//       {signUp && (
//         <div className="container mt-5">
//           <div className="row">
//             <div className="col-md-4"></div>

//             <div className="col-md-4">
//               <form>
//                 <div className=" mb-4">
//                   <h1 className="text-center">Register</h1>
//                   <label className="form-label" htmlFor="registerName">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     id="registerName"
//                     className="form-control"
//                     required
//                   />
//                 </div>

//                 <div className=" mb-4">
//                   <label className="form-label" htmlFor="registerUsername">
//                     Username
//                   </label>
//                   <input
//                     type="text"
//                     id="registerUsername"
//                     className="form-control"
//                     required
//                   />
//                 </div>

//                 <div className=" mb-4">
//                   <label className="form-label" htmlFor="registerEmail">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="registerEmail"
//                     className="form-control"
//                     required
//                   />
//                 </div>

//                 <div className=" mb-4">
//                   <label className="form-label" htmlFor="registerPassword">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="registerPassword"
//                     className="form-control"
//                     required
//                   />
//                 </div>

//                 <div className=" mb-4">
//                   <label
//                     className="form-label"
//                     htmlFor="registerRepeatPassword"
//                   >
//                     Repeat password
//                   </label>

//                   <input
//                     type="password"
//                     id="registerRepeatPassword"
//                     className="form-control"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <p>
//                     Don't have an email? Create one{" "}
//                     <a
//                       href="https://www.gmail.com"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       here
//                     </a>
//                   </p>
//                 </div>

//                 {/* <div className="form-check d-flex justify-content-center mb-4">
//          <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" 
//            aria-describedby="registerCheckHelpText" />
//          <label className="form-check-label" for="registerCheck">
//            I have read and agree to the terms
//          </label>
//        </div>  */}

//                 <button
//                   className="btn btn-primary btn-block form-control mb-3"
//                   onClick={handleShowLogin}
//                 >
//                   Sign up
//                 </button>
//                 <div className="text-center mt-4">
//                   <p>
//                     Already a member?{" "}
//                     <a href="#!" onClick={handleShowLogin}>
//                       Login
//                     </a>
//                   </p>
//                 </div>
//               </form>
//             </div>

//             <div className="col-md-4"></div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
// export default Navbar;

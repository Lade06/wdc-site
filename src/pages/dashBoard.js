import React from "react";
import "./dashBoard.css";

import student from "../Assets/Student-1-modified.png";
import { useNavigate } from "react-router-dom";

// import student1 from "../Assets/student.jpg";

const DashBoard = () => {
  const navigate = useNavigate();
  const handleShowHomePage = () => {
    navigate("/home");
  };
  return (
    <div>
       
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center mt-5">Student Dashboard</h1>
          </div>
        </div>
        <div className="row bg-primary p-2 text-light  mt-3 dashNav">
          <div className="col-md-6">
            <h3 className="mt-5">Welcome back, Ayomide</h3>
          </div>
          <div className="col-md-6">
            <div className="d-flex gap-4 mt-5">
              <img
                src={student}
                alt=""
                width={"100px"}
                className="img-student"
              />

              <p>
                <b>Name:</b> Ayomide Ayomide <br />
                <b>Department: </b>Computer <br />
                <b>Student No:</b> LASG/WDC/CTO/22/23
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6 col-lg-3">
            <div className="custom-box">Student Information</div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="custom-box">Exams</div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="custom-box">Projects</div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="custom-box">My Grade</div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 col-lg-3">
            <div className="custom-box">Identity Card</div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="custom-box">Department Gallery</div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="custom-box">Topics</div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="custom-box">Assignments</div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6 col-lg-3">
            <div className="custom-box">Weekly Dues</div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="custom-box">Monthly Dues</div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="custom-box">Attendance</div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="custom-box">Timetable</div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 col-lg-3">
            <div className="custom-box">Make Complaint</div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="custom-box">Announcement</div>
          </div>
          {/* <div className="col-md-6 col-lg-3">
            <div className="custom-box">Make Complaint</div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="custom-box">News</div>
          </div> */}
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <button
              className="btn btn-info mt-5 mx-3"
              onClick={handleShowHomePage}
            >
              Logout
            </button>
          </div>
        </div>

        {/* <div class="row">
            <div class="col-md-12">
                <div class="welcome-card">
                    <h2>Welcome Back!</h2>
                    <img src={student} alt="Profile Image" class="img-fluid rounded-circle iii " />
                    <p><strong>Name:</strong> John Doe</p>
                    <p><strong>Department:</strong> Computer Science</p>
                    <p><strong>Matric Number:</strong> 123456789</p>
                </div>
            </div>
        </div>  */}
      </div>
    </div>
  );
};
export default DashBoard;

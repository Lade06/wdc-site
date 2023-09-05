import React from "react";
import "./courses.css";

import code from "../Assets/skills.jpg";
import adult from "../Assets/adult1.jpeg";
import barbing from "../Assets/barb1.jpg";
import hairdressing from "../Assets/hair.jpeg";
import catering from "../Assets/cook1.jpeg";
import sewing from "../Assets/sew1.jpeg";
import photography from "../Assets/photo1.jpeg";
import textile from "../Assets/textile4.jpeg";
import { useNavigate } from "react-router-dom";
//  import adult from "../Assets/adult1.jpeg"

const Courses = () => {
  const navigate = useNavigate()
  const handleShowModal = () => {
  navigate('/modal')
  }

  return (
    <div>
      <div className="container-fluid background-image">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center text-light mt-5 word-image">
              <h1>Pupolar Courses</h1>
              {/* <h3>
                <span>Home</span> - Popular Courses
              </h3> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12 text-center mt-5">
                <h2>Popular Courses We Offer</h2>
                <p>Each of these courses have different durations</p>
              </div>
            </div>
          </div>
        </div>

        {/* first section of the images begin here */}
        {/* The modal can be attached to the <span> tag */}
        <div className="row">
          <div className="col-md-3 mt-5">
            <img src={adult} alt="" width={"100%"} />
            <div className="text-center mt-2">
              <big>
                <b>Adult Literacy</b>
              </big>
              <p>
                Read more about the course{" "}
                <span className="click-here" onClick={handleShowModal}>here</span>
              </p>
            </div>
          </div>
          <div className="col-md-3 mt-5">
            <img src={barbing} alt="" width={"100%"} />
            <div className="text-center mt-2">
              <big>
                <b>Barbing</b>
              </big>
              <p>
                Read more about the course{" "}
                <span className="click-here">here</span>
              </p>
            </div>
          </div>
          <div className="col-md-3 mt-5">
            <img src={code} alt="" width={"100%"} height={"70%"} />
            <div className="text-center mt-2">
              <big>
                <b>Computer Techniques & Operation</b>
              </big>
              <p>
                Read more about the course{" "}
                <span className="click-here">here</span>
              </p>
            </div>
          </div>
          <div className="col-md-3 mt-5">
            <img src={hairdressing} alt="" width={"100%"} />
            <div className="text-center mt-2">
              <big>
                <b>Hairdressing & Cosmetology</b>
              </big>
              <p>
                Read more about the course{" "}
                <span className="click-here">here</span>
              </p>
            </div>
          </div>
        </div>

        {/* second section of the images begin here */}
        <div className="row">
          <div className="col-md-3 mt-5">
            <img src={catering} alt="" width={"100%"} />
            <div className="text-center mt-2">
              <big>
                <b>Catering & Hotel Management</b>
              </big>
              <p>
                Read more about the course{" "}
                <span className="click-here">here</span>
              </p>
            </div>
          </div>
          <div className="col-md-3 mt-5">
            <img src={sewing} alt="" width={"100%"} />
            <div className="text-center mt-2">
              <big>
                <b>Sewing & Fashion Design</b>
              </big>
              <p>
                Read more about the course{" "}
                <span className="click-here">here</span>
              </p>
            </div>
          </div>
          <div className="col-md-3 mt-5">
            <img src={photography} alt="" width={"100%"} />
            <div className="text-center mt-2">
              <big>
                <b>Photography</b>
              </big>
              <p>
                Read more about the course{" "}
                <span className="click-here">here</span>
              </p>
            </div>
          </div>
          <div className="col-md-3 mt-5">
            <img src={textile} alt="" width={"100%"} height={"60%"} />
            <div className="text-center mt-2">
              <big>
                <b>Textile Design</b>
              </big>
              <p>
                Read more about the course{" "}
                <span className="click-here">here</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Courses;

import React from "react";
import code from "../Assets/code.jpeg";
import sewing from "../Assets/sewing.jpg";
import hair from "../Assets/hair.jpeg";
// import laglogo from "../Assets/lagos-logo.png";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
// import { useNavigate } from "react-router-dom";

const Home = () => {
  // const navigate = useNavigate()
  // const handleShowComputer = () => {
  //   navigate('/computer')
  // }
  return (
    <div>
        <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mt-5">
           <h1>WOMEN DEVELOPMENT CENTRE</h1>
           <h6>Ministry Of Women Affairs & Poverty Alleviation</h6>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-md-6 mt-5">
            <img src={laglogo} alt="" width={"100%"} />
          </div>
          <div className="col-md-6 mt-5">
            <h1 className="text-danger">
              Welcome To <br /> WOMEN DEVELOMENT CENTRE AGEGE
            </h1>
            <h2>Ministry Of Women Affairs & Poverty Alleviation</h2>
          </div>
        </div> */}
        <div className="row">
          <div className="col-md-4 mt-5">
            <img src={sewing} alt="" width={"100%"} />
            <p>Fashion Design</p>
          </div>
          <div className="col-md-4 mt-5">
            <img src={code} alt="" width={"100%"} />
            <p>Computer Operation</p>
          </div>
          <div className="col-md-4 mt-5">
            <img src={hair} alt="" width={"100%"} />
            <p>Hair Dressing</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;

import React from "react";

import barb1 from "../Assets/barb1.jpg";
import barb2 from "../Assets/barb2.jpeg";
import barb3 from "../Assets/barb3.jpeg";
import barb4 from "../Assets/barb4.jpg";
const Barbing = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mt-4">
            <h1>Barbing Department</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mt-5">
            <img src={barb1} alt="" width={"100%"} />
          </div>
          <div className="col-md-3 mt-5">
            <img src={barb2} alt="" width={"100%"} />
          </div>
          <div className="col-md-3 mt-5">
            <img src={barb3} alt="" width={"100%"} />
          </div>
          <div className="col-md-3 mt-5">
            <img src={barb4} alt="" width={"100%"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Barbing;

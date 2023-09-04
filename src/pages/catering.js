import React from "react";

import cook1 from "../Assets/cook1.jpeg";
import cook2 from "../Assets/cook2.jpg";
import cook3 from "../Assets/cook3.jpg";
import cook4 from "../Assets/cook4.jpeg";
const Catering = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mt-4">
            <h1>Catering Department</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mt-5">
            <img src={cook1} alt="" width={"100%"} />
          </div>
          <div className="col-md-3 mt-5">
            <img src={cook2} alt="" width={"100%"} />
          </div>
          <div className="col-md-3 mt-5">
            <img src={cook3} alt="" width={"100%"} />
          </div>
          <div className="col-md-3 mt-5">
            <img src={cook4} alt="" width={"100%"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Catering;

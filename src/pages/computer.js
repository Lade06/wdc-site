import React from "react";
import code from "../Assets/code.jpeg";
import code1 from "../Assets/code1.jpg";
import code2 from "../Assets/code2.jpg";
import code3 from "../Assets/code3.jpg";
// import code from "../Assets/code2.jpg";

const Computer = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center mt-3">Computer Department</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 mt-5">
            <img src={code} alt="" width={"100%"} />
          </div>
          <div className="col-md-3 mt-5">
            <img src={code1} alt="" width={"100%"} />
          </div>
          <div className="col-md-3 mt-5">
            <img src={code2} alt="" width={"100%"} />
          </div>
          <div className="col-md-3 mt-5">
            <img src={code3} alt="" width={"100%"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Computer;

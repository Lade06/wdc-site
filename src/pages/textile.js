import React from "react";

import textile1 from "../Assets/textile1.jpeg";
import textile2 from "../Assets/textile2.jpg";
import textile3 from "../Assets/textile3.jpeg";
import textile4 from "../Assets/textile4.jpeg";

const Textile = () => {
    return(
        <div>
<div className="container">
        <div className="row">
          <div className="col-md-12 text-center mt-4">
            <h1>Textile Department</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mt-5">
            <img src={textile1} alt="" width={"100%"} />
          </div>
          <div className="col-md-3 mt-5">
            <img src={textile2} alt="" width={"100%"} />
          </div>
          <div className="col-md-3 mt-5">
            <img src={textile3} alt="" width={"100%"} />
          </div>
          <div className="col-md-3 mt-5">
            <img src={textile4} alt="" width={"100%"} />
          </div>
        </div>
      </div>
        </div>
    )
}
export default Textile;
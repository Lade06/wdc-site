import React from "react";
import adult1 from "../Assets/adult1.jpeg";
import adult2 from "../Assets/adult2.jpeg";
import adult3 from "../Assets/adult3.jpeg";
import adult4 from "../Assets/adult4.jpg";


const AdultLiteracy = () => {
    return(
        <div>
<div className="container">
        <div className="row">
          <div className="col-md-12 text-center mt-4">
            <h1>Adult Literacy Department</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mt-5">
            <img src={adult1} alt="" width={"100%"} />
          </div>
          <div className="col-md-3 mt-5">
            <img src={adult2} alt="" width={"100%"} />
          </div>
          <div className="col-md-3 mt-5">
            <img src={adult3} alt="" width={"100%"} />
          </div>
          <div className="col-md-3 mt-5">
            <img src={adult4} alt="" width={"100%"} />
          </div>
        </div>
      </div>
        </div>
    )
}
export default AdultLiteracy;
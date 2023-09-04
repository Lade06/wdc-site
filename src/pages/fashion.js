import React from "react";

import sewing from "../Assets/sewing.jpg";
import sew1 from "../Assets/sew1.jpeg";
import sew2 from "../Assets/sew2.jpeg";
import sew3 from "../Assets/sew3.jpg";

const Fashion = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mt-4">
            <h1>Fashion Department</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mt-5">
            <img src={sewing} alt="" width={"100%"} />
          </div>
          <div className="col-md-3 mt-5">
            <img src={sew1} alt="" width={"100%"} />
          </div>
          <div className="col-md-3 mt-5">
            <img src={sew2} alt="" width={"100%"} />
          </div>
          <div className="col-md-3 mt-5">
            <img src={sew3} alt="" width={"100%"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Fashion;

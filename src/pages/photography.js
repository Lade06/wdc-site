import React from "react";
import photo1 from "../Assets/photo1.jpeg";
import photo2 from "../Assets/photo2.png";
import photo3 from "../Assets/photo3.jpg";
import photo4 from "../Assets/photo4.jpg";
import photo5 from "../Assets/photo.jpeg";

const Photography = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mt-4">
            <h1>Photography Department</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mt-5">
            <img src={photo1} alt="" width={"100%"} />
          </div>
          <div className="col-md-3 mt-5">
            <img src={photo2} alt="" width={"100%"} />
          </div>
          <div className="col-md-3 mt-5">
            <img src={photo3} alt="" width={"100%"} />
          </div>
          <div className="col-md-3 mt-5">
            <img src={photo4} alt="" width={"100%"} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-5">
            <img src={photo5} alt="" width={"100%"} height={"50%"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Photography;

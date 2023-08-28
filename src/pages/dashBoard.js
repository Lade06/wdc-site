import React from "react";
import student from "../Assets/Student-1-modified.png";
const DashBoard = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center mt-5">Dashboard</h1>
          </div>
          <div className="d-flex">
          <img
                  src={student}
                  alt=""
                  width={"40%"}
                  className="img-student"
                />
                
                <p>
                  Name: Ayomide Ayomide <br />
                  Student No: LASG/WDC/CTO/22/23
                </p>
          </div>
          {/* <div className="col-md-6 mt-5">
            <div className="row">
              <div className="col-md-6">
                {" "}
                <img
                  src={student}
                  alt=""
                  width={"40%"}
                  className="img-student"
                />
              </div>
              <div className="col-md-6">
                <p>
                  Name: Ayomide Ayomide <br />
                  Student No: LASG/WDC/CTO/22/23
                </p>
              </div>
            </div>
            
           
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default DashBoard;
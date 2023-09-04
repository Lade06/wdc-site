import React from "react";

import hair from "../Assets/hair.jpeg";
import hair1 from "../Assets/hair1.jpeg";
import hair2 from "../Assets/hair2.png";
import hair3 from "../Assets/hair3.jpeg";

const Hairdressing = () => {
    return(
        <div>
<div className="container">
    <div className="row">
        <div className="col-md-12 text-center mt-4">
            <h1>Hairdressing Department</h1>
        </div>
    </div>
    <div className="row">
        <div className="col-md-3 mt-5">
            <img src={hair} alt="" width={"100%"} />
        </div>
        <div className="col-md-3 mt-5">
        <img src={hair1} alt="" width={"100%"} />
        </div>
        <div className="col-md-3 mt-5">
        <img src={hair2} alt="" width={"100%"} />
        </div>
        <div className="col-md-3 mt-5">
        <img src={hair3} alt="" width={"100%"} />
        </div>
    </div>
</div>
        </div>
    )
}
export default Hairdressing;
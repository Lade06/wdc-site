import React from "react";
import code from "../Assets/code.jpeg";
import sewing from "../Assets/sewing.jpg";
import hair from "../Assets/hair.jpeg";
// import textile1 from "../Assets/textile1.jpeg";
// import smith from "../Assets/smith.jpeg";
// import teach from "../Assets/teach.jpeg";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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

      
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12 text-center mt-5">
              <h2>
                <b>Women Development Centre Staffs</b>
              </h2>
            </div>
          </div>    
        </div>
  

      <div className="mt-5">
        <Carousel
          responsive={responsive}
          itemClass="carousel-item-padding-left-10-px"
        >
          <div className="container">
            <img src={code} alt="" />
          </div>
          <div>
            <img src={code} alt="" />
          </div>
          <div>
            <img src={code} alt="" />
          </div>
          <div>
            <img src={code} alt="" />
          </div>
        </Carousel>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 text-center mt-5">
            <h2>
              <b>Women Development Centre Oracle</b>
            </h2>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <Carousel
          responsive={responsive}
          itemClass="carousel-item-padding-left-10-px"
        >
          <div className="container">
            <img src={code} alt="" />
          </div>
          <div>
            <img src={hair} alt="" />
          </div>
          <div>
            <img src={code} alt="" />
          </div>
          <div>
            <img src={code} alt="" />
          </div>
        </Carousel>
      </div>
      <Footer />
    </div>
  );
};
export default Home;

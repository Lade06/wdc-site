import React from "react";

const Footer = () => {
    return(
        <div>
<section className="mt-5">

  <footer className="bg-dark text-white text-center">
    
    <div className="container p-4">
    
      <div className="row">
       
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase">W.D.C</h5>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
            aliquam voluptatem veniam, est atque cumque eum delectus sint!
          </p>
        </div>
      

        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Departments</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Computer Operation</a>
            </li>
            <li>
              <a href="#!" className="text-white">Hair Dressing</a>
            </li>
            <li>
              <a href="#!" className="text-white">Fashion Design</a>
            </li>
            <li>
              <a href="#!" className="text-white">Photography</a>
            </li>
          </ul>
        </div>
        
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-0">Link</h5>

          <ul className="list-unstyled">
            <li>
              <a href="#!" className="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 4</a>
            </li>
          </ul>
        </div>
     
      </div>
    
    </div>
   
    <div className="text-center p-2 bg-primary " >
     
      <p>  © 2023 Copyright Women Development Centre</p>
    </div>
   
  </footer>
 
</section>
        </div>
    )
}
export default Footer;
import React from "react";
import jayesh from "../assests/jayesh(2).jpeg"
function Title(props){
    // const name="jAYESH TALREJA"
    // const leadtext="I am freelancer developer"
    const{name,leadtext}=props;
    return (
        <div className="container">
      <div className="row text-center align-items-center my-5 py-5">
        <div className="col-12 col-md-6">
          <img
            className="img-fluid rounded-circle w-75"
            src={jayesh}
            alt="name"
          />
        </div>
        <div className="col-12 col-md-6 pt-5">
          <div className="font-weight-light" style={{fontSize: "50px"}}>
            Hi, I am <span className="text-info">{name}</span>
          </div>
          <h4 className="font-weight-light">{leadtext}</h4>
        </div>
      </div>
    </div>
    );
}

export default Title;
import React from "react";
import jayesh from "../assets/jayesh.jpg";
function Title(){
    const name="Jayesh Talreja";
    const leadText="I am a freelancer from India";
    return(
        <div className="container my-5 py-5">
        <div className="row text-center align-items-center">
            <div className="col-12 col-md-6">
                <img className="img-fluid rounded-circle w-75" src={jayesh} alt="jayesh" />
            </div>
            <div className="col-12 col-md-6">
                <h1 className="font-weight-light" style={{ fontSize:"50px"}}>Hi,I am <span className="text-info">{name}</span></h1>
                <h4 className="font-weight-light">{leadText}</h4>
            </div>
        </div>
    </div>
    );
}
export default Title;
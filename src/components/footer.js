import React from "react";
import {Link } from "react-router-dom";
function Footer(){
    return(
    <footer>
        <div className="container-fluid text-center py-3 " 
        style={{backgroundColor: "black"}}>
                    <div className="py-5">            
                    <h2 className="text-light py-3">Interested in working with me?</h2>
                    <Link to="/contact">
                    <button className="btn btn-outline-light btn-lg ">Let's Talk</button>
                    </Link>
                    </div>
            <div className="row text-center">
                <div className="col-12 col-md-4 py-3 text-center">
                    <h5 className="text-info">More Links</h5>
                    <a href="/" className="text-light d-block">Blogs</a>
                    <Link to="/" className="text-light d-block">Home</Link>
                    <a href="/allprojects" className="text-light d-block">Projects</a>
                    <Link to="/contact" className="text-light d-block">Contact Me</Link>
                    <Link to="/write-a-recommendation" className="text-light">Write a Recommendation</Link>
                </div>
                <div className="col-12  col-md-4 text-light text-justify py-3 text-center">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quia, in fugiat molestias, eos
                        maiores iusto magni optio quaerat consectetur assumenda impedit nobis inventore veniam quis et
                        atque ullam. Cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                        laudantium, veniam dolor voluptate nihil porro minus soluta? Aliquid, delectus nisi adipisci cum
                        quis vel, quidem necessitatibus non eligendi, earum cumque corporis eaque accusantium nobis
                        doloribus perferendis possimus aperiam eius illum.</p>
                </div>
                <div className="col-12 col-md-4 py-3">
                    <h5 className="text-info">Social</h5>
                    <a href="/"><i className="fab fa-linkedin text-light h1 d-block"></i></a>
                    <a href="/"><i className="fab fa-github text-light h1 d-block"></i></a>
                    <a href="/"><i className="fas fa-envelope text-light h1 d-block"></i></a>
                </div>
            </div>
           
                <div className="text-muted text-center">
                    <p>copyright@Jayesh Talreja2020</p>
                </div>
            </div>

       
    </footer>
    );
}
export default Footer;
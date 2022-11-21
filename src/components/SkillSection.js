import React from "react";

import html from"../assets/download.png"
import css from "../assets/download (1).png"
import js from "../assets/javascript.png"
import bs from "../assets/download.jpg"
import reac from "../assets/download (2).png"
import mysql from "../assets/download (3).png"
import py from "../assets/download (4).png"
import flask from "../assets/download (5).png"
import Skill from "./Skill";
import {v4 as uuid} from "uuid";
import {Consumer} from "./context";

function SkillSection(){
    return(
        <Consumer>
        {(value) => {
            const {skills}=value;
            const finalSkillRow=[];
            for(let i=0;i<skills.length/4;i++){
                let skillRow=skills.slice(i*4,(i+1)*4);
                finalSkillRow.push(
                <div key={uuid()}className="d-flex justify-content-around py-3">
                    {skillRow.map((skill) => 
                    (
                        
                    <Skill key={uuid()} skill={skill}/>
                    
                    ))}
            
                </div>
                );
                }
            return(
                <div className="bg-light w-100">
                <div className="container text-center py-5">
                    <h1 className="font-weight-dark"><span className="text-info">Technology</span> Stack</h1>
                    <div className="lead pb-5"> I design,develop and deliver with these weapons.</div>
                    {finalSkillRow}
                </div>
                
            </div>
            );
            
        }}
        </Consumer>
    );
    
    // console.log(uuid());
    // console.log(uuid());
    // console.log(uuid());
   // const finalSkillRow=[];

    
    
}
export default SkillSection;

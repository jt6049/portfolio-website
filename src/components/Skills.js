import React from 'react'
import {v4 as uuid} from "uuid"

function Skills(props) {
    const {imageUrl,totalstars,greystars}=props.skill;
    const star=[];
    for(let i=1;i<=totalstars;i++){
        if(i<=greystars){
            star.push(<span key={uuid()} className="text-info">★</span>)
        }
        else{
            star.push(<span key={uuid()}>★</span>)
        }
    }

  return (
    <div>
            <img
              className="rounded-circle"
              src={imageUrl}
              alt="test img"
              style={{width: "100px", height: "100px"}}
            />
            <div>
              {star}
            </div>
    </div>
  )
}

export default Skills;

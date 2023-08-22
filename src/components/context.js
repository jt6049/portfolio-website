import React,{Component} from "react";
import down1 from "../assets/download (1).jpg"
import down2 from "../assets/download (2).jpg"
import down3 from "../assets/images.jpg"
import html from"../assets/download.png"
import css from "../assets/download (1).png"
import js from "../assets/javascript.png"
import bs from "../assets/download.jpg"
import reac from "../assets/download (2).png"
import mysql from "../assets/download (3).png"
import py from "../assets/download (4).png"
import flask from "../assets/download (5).png"
import axios from "axios";

const Context=React.createContext();

export class Provider extends Component{
    handler=(action,newObject)=>{
        switch(action){
            case "ADD_PROJECT":
                this.setState({
                    projects:[newObject, ...this.state.projects],
                });
                break;
            
                case "ADD_RECOMMENDATION":
                    this.setState({
                        recommendations:[newObject, ...this.state.recommendations],
                    });
        }           
    };

    state ={
        handler: this.handler,
        recommendations: [] ,
        skills: [
            {
                id:1,
                name:"HTML5",
                imageUrl:html,
                starsTotal: 3,
                starsActive: 3,
            },
            {
                id:2,
                name:"CSS3",
                imageUrl:css,
                starsTotal: 3,
                starsActive: 3,
            },
            {
                id:3,
                name:"JavaScript",
                imageUrl:js,
                starsTotal: 3,
                starsActive: 2,
            },
            {
                id:4,
                name:"Bootstrap",
                imageUrl:bs,
                starsTotal: 3,
                starsActive: 2,
            },
            {
                id:5,
                name:"React",
                imageUrl:reac,
                starsTotal: 3,
                starsActive: 2,
            },
            {
                id:6,
                name:"MySQL",
                imageUrl:mysql,
                starsTotal: 3,
                starsActive: 2,
            },
            {
                id:7,
                name:"Python",
                imageUrl:py,
                starsTotal: 3,
                starsActive: 3,
            },
            {
                id:8,
                name:"Flask",
                imageUrl:flask,
                starsTotal: 3,
                starsActive: 2,
            },
            
        ],
         projects:
        [{
            id:1,
            title:"Project 1",
            imageUrl: down1,
            excerpt:"This is  my project about....",
            body:"Body 1",
        },
        {
            id:2,
            title:"Project 2",
            imageUrl:down2,
            excerpt:"This is  my project about....",
            body:"Body 2",
        },
        {
            id:3,
            title:"Project 3",
            imageUrl:down3,
            excerpt:"This is  my project about....",
            body:"Body 3",
        },
        {
            id:3,
            title:"Project 3",
            imageUrl:down3,
            excerpt:"This is  my project about....",
            body:"Body 4",
        },
    ],
    
    };
    async componentDidMount(){
        const [responseRecommendations,responseSkills,responseProjects]= await Promise.all([
            axios.get("http://127.0.0.1:9000/api/recommendations"),
            axios.get("http://127.0.0.1:9000/api/skills"),
            axios.get("http://127.0.0.1:9000/api/projects"),
        ]);

  const newState={};
  if(responseRecommendations.data.isSuccessful && responseRecommendations.data.results.length!==0)
  {
    newState.recommendations=responseRecommendations.data.results;
  }
  if(responseSkills.data.isSuccessful && responseSkills.data.results.length!==0)
  {
    newState.Skills=responseSkills.data.results;
  }
  if(responseProjects.data.isSuccessful && responseProjects.data.results.length!==0)
  {
    newState.Projects=responseProjects.data.results;
  }
  this.setState(newState);

//         let response= await axios.get("http://127.0.0.1:9000/api/recommendations");
//         console.log(response);
//         if(response.data.isSuccessful && response.data.results.length!=0){
//         this.setState({
//             recommendations:response.data.results,

//         });
//     }
//     response= await axios.get("http://127.0.0.1:9000/api/skills");
//     console.log(response);
//     if(response.data.isSuccessful && response.data.results.length!=0){
//     this.setState({
//         skills:response.data.results,

//     });
// }
//         response= await axios.get("http://127.0.0.1:9000/api/projects");
//         console.log(response);
//         if(response.data.isSuccessful && response.data.results.length!=0){
//         this.setState({
//             projects:response.data.results,

//         })
//     }
}


    render(){
        return(
            <Context.Provider value={this.state}>
            {
                this.props.children
            }
            </Context.Provider>
        )
    }
}
export const Consumer=Context.Consumer;
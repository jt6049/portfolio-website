import React, { Component } from "react";
import img1 from "../assests/free-stock-image-1.jpg";
import img2 from "../assests/free-stock-image-2.jpg";
import img3 from "../assests/free-stock-image-3.jpg";
import img4 from "../assests/html5.png";
import img5 from "../assests/css3.png";
import img6 from "../assests/javascript.png";
import img7 from "../assests/bootstrap4.png";
import img8 from "../assests/react.png";
import img11 from "../assests/mysql.png";
import img9 from "../assests/python.png";
import img10 from "../assests/flask.png";
import axios from "axios";

const Context = React.createContext();
export class Provider extends Component {
  statechangehandler = (action, newObject) => {
    switch (action) {
      case "ADD_PROJECT":
        this.setState({
          projects: [newObject, ...this.state.projects],
        });
        break;
      case "ADD_RECOMMENDATION":
        this.setState({
          stacks: [newObject, ...this.state.stacks],
        });
    }
  };
  state = {
    statechangehandler: this.statechangehandler,
    stacks: [
      {
        id: 1,
        title:
          "He is a good engineer, He is very passionate about his career and job, he is ambitious too",
        excerpt: "Random guy 1",
        company: "CEO at ABC company",
      },
      {
        id: 2,
        title: "He is an excellent developer",
        excerpt: "Random guy 2",
        company: "Director at ABC company",
      },
      {
        id: 3,
        title: "He is a lazy person",
        excerpt: "Random guy 3",
        company: "Manager at ABC company",
      },
      {
        id: 4,
        title: "He get's things done so quickly",
        excerpt: "Random guy 4",
        company: "SDE at ABC company",
      },
    ],
    skills: [
      {
        id: 1,
        imageUrl: img4,
        totalstars: 3,
        greystars: 2,
      },
      {
        id: 2,
        imageUrl: img5,
        totalstars: 3,
        greystars: 3,
      },
      {
        id: 3,
        imageUrl: img6,
        totalstars: 3,
        greystars: 1,
      },
      {
        id: 4,
        imageUrl: img7,
        totalstars: 3,
        greystars: 3,
      },
      {
        id: 5,
        imageUrl: img8,
        totalstars: 3,
        greystars: 2,
      },
      {
        id: 6,
        imageUrl: img9,
        totalstars: 3,
        greystars: 2,
      },
      {
        id: 7,
        imageUrl: img10,
        totalstars: 3,
        greystars: 3,
      },
      {
        id: 8,
        imageUrl: img11,
        totalstars: 3,
        greystars: 1,
      },
    ],
    projects: [
      {
        id: 1,
        title: "Project 1",
        imageurl: img1,
        excerpt: "This is my project about....",
        body: "body1",
      },
      {
        id: 2,
        title: "Project 2",
        imageurl: img2,
        excerpt: "This is my project about....",
        body: "body1",
      },
      {
        id: 3,
        title: "Project 3",
        imageurl: img3,
        excerpt: "This is my project about....",
        body: "body1",
      },
      {
        id: 4,
        title: "Project 4",
        imageurl: img3,
        excerpt: "This is my project about....",
        body: "body1",
      },
    ],
  };
  async componentDidMount() {
    const [
      responses_recommendations,
      responses_skills,
      responses_projects,
    ] = await Promise.all([
      axios.get("http://127.0.0.1:9000/api/recommendations"),
      axios.get("http://127.0.0.1:9000/api/skills"),
      axios.get("http://127.0.0.1:9000/api/projects"),
    ]);
    const newState = {};
    if (
      responses_recommendations.data.isSuccessful &&
      responses_recommendations.data.results.length != 0
    ) {
      newState.stacks = responses_recommendations.data.results;
    }
    if (
      responses_skills.data.isSuccessful &&
      responses_skills.data.results.length != 0
    ) {
      newState.skills = responses_skills.data.results;
    }
    if (
      responses_projects.data.isSuccessful &&
      responses_projects.data.results.length != 0
    ) {
      newState.projects = responses_projects.data.results;
    }
    this.setState(newState);
    // let responses = await axios.get(
    //   "http://127.0.0.1:9000/api/recommendations"
    // );
    // console.log(responses);
    // if (responses.data.isSuccessful) {
    //   this.setState({
    //     stacks: responses.data.results,
    //   });
    // }
    // responses = await axios.get("http://127.0.0.1:9000/api/skills");
    // console.log(responses);
    // if (responses.data.isSuccessful) {
    //   this.setState({
    //     skills: responses.data.results,
    //   });
    // }
    // responses = await axios.get("http://127.0.0.1:9000/api/projects");
    // console.log(responses);
    // if (responses.data.isSuccessful) {
    //   this.setState({
    //     projects: responses.data.results,
    //   });
    // }
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;

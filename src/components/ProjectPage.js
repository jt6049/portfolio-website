import React, { Component } from "react";
import axios from "axios";

class ProjectPage extends Component {
  state = {
    imageurl: "",
    title: "",
    body: "",
  };

  async componentDidMount() {
    const responses = await axios(
      `http://127.0.0.1:9000/api/projectt?id=${this.props.match.params.id}`
    );
    const isSuccessful = responses.data.isSuccessful;
    if (isSuccessful) {
      this.setState({
        imageurl: responses.data.results.imageurl,
        title: responses.data.results.title,
        body: responses.data.results.body,
      });
    }
  }
  render() {
    // const { projects } = value;
    // const id = this.props.match.params.id;
    // console.log(id);
    // const project = projects.filter((project) => project.id == id)[0];
    // console.log(project);
    const { imageurl, title, body } = this.state;
    return (
      <div className="col-12 text-center">
        <div className="justify-content-center">
          <img src={imageurl} alt={title} className="img-fluid" />
        </div>
        <div className="text-center">
          <h1>{title}</h1>
        </div>
        <div>{body}</div>
      </div>
    );
  }
}

export default ProjectPage;

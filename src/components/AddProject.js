import React, { Component } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Consumer } from "./context";
import { v4 as uuid } from "uuid";
import axios from "axios";
class AddProject extends Component {
  state = {
    url: "",
    title: "",
    excerpt: "",
    body: "",
    submitmessage: "",
    submitMessagetextColour: "",
  };
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  onSubmit = async (statechangehandler, event) => {
    event.preventDefault();
    const newProject = {
      id: uuid(),
      title: this.state.title,
      imageurl: this.state.url,
      excerpt: this.state.excerpt,
      body: this.state.body,
    };
    const responses = await axios.post(
      "http://127.0.0.1:9000/api/project",
      newProject
    );
    const isSuccessful = responses.data.isSuccessful;
    if (isSuccessful) {
      this.setState({
        submitMessage: `Published successfully, enjoy`,
        submitMessagetextColour: "text-info",
      });
    }

    statechangehandler("ADD_PROJECT", newProject);
  };
  onBodyChange = (value) => {
    this.setState({
      body: value,
    });
  };
  render() {
    return (
      <Consumer>
        {(value) => {
          const {
            url,
            title,
            body,
            submitMessage,
            submitMessagetextColour,
          } = this.state;
          const { statechangehandler } = value;
          return (
            <div className="container-fluid py-5 my-5">
              <div className="text-center my-5 font-weight-light">
                <h1>
                  Add <span className="text-info">Project</span>
                </h1>
              </div>
              <div className="row py-3 px-lg-5">
                <div className="col-12 col-lg-6">
                  <form onSubmit={this.onSubmit.bind(this, statechangehandler)}>
                    <div className="form-group">
                      <label htmlFor="url"> Featured image Url * </label>
                      <input
                        type="text"
                        name="url"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="title"> Title * </label>
                      <input
                        type="text"
                        name="title"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="excerpt"> excerpt * </label>
                      <input
                        type="text"
                        name="excerpt"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <SimpleMDE
                      onChange={this.onBodyChange}
                      options={{
                        hideIcons: ["preview", "side-by-side", "fullscreen"],
                      }}
                    />
                    <button
                      type="submit"
                      className="bn btn-dark float-right "
                      style={{ backgroundColor: "black" }}
                    >
                      Publish
                    </button>
                  </form>
                  <div className="py-5 text-center">
                    <h5>
                      <span className={submitMessagetextColour}>
                        {submitMessage}
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="justify-content-center">
                    <img src={url} alt={title} className="img-fluid" />
                  </div>
                  <div className="text-center">
                    <h1>{title}</h1>
                  </div>
                  <div>{body}</div>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddProject;

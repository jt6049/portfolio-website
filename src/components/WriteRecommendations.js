import React, { Component } from "react";
import { Consumer } from "./context";
import { v4 as uuid } from "uuid";

class WriteRecommendations extends Component {
  state = {
    name: "",
    email: "",
    Company: "",
    Designation: "",
    Recommendation: "",
    submitMessage: "",
    submitMessageColour: "",
  };
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  onSubmit = (statechangehandler, event) => {
    event.preventDefault();
    let isSuccessful = true;
    const { name } = this.state;
    if (isSuccessful) {
      this.setState({
        submitMessage: `Thanks ${name} for your recommendation`,
        submitMessageColour: "text-info",
      });
    }
    const recommendation = {
      id: uuid(),
      title: this.state.Recommendation,
      excerpt: this.state.name,
      company: this.state.Company,
    };
    statechangehandler("ADD_RECOMMENDATION", recommendation);
  };
  render() {
    return (
      <Consumer>
        {(value) => {
          const { statechangehandler } = value;
          const { submitMessage, submitMessageColour } = this.state;
          return (
            <div className="container my-5">
              <h1 className="font-weight-light text-center py-5 ">
                <span className=" text-info "> Thank you ! </span> for taking
                your time
              </h1>
              <div className="row justify-content-center ">
                <div className="col-11 col-lg-5 ">
                  <form onSubmit={this.onSubmit.bind(this, statechangehandler)}>
                    <div className="form-group">
                      <label htmlFor="name"> Name * </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email"> Email * </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Company">Company/Instiution * </label>
                      <input
                        type="text"
                        name="Company"
                        className="form-control"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Designation"> Designation * </label>
                      <input
                        type="text"
                        name="Designation"
                        className="form-control"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Recommendation">Recommendation *</label>
                      <textarea
                        className="form-control"
                        name="Recommendation"
                        rows="5"
                        onChange={this.onChange}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="bn btn-dark float-right "
                      style={{ backgroundColor: "black" }}
                    >
                      Lot's of Love
                    </button>
                  </form>
                </div>
                <div className="py-5 mx-2 text-center">
                  <h5 className={submitMessageColour}>{submitMessage}</h5>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default WriteRecommendations;

import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
class RecCard extends Component {
  state = {
    shouldShow: false,
  };
  someFunction = () =>
    this.setState({
      shouldShow: true,
    });
  should_notShow = () => {
    this.setState({
      shouldShow: false,
    });
  };

  render() {
    const { title, excerpt, company } = this.props.stack;
    const { shouldShow } = this.state;
    console.log(shouldShow);
    var title1 = "";
    if (title.length > 34) {
      title1 = title.substring(0, 34) + "...";
    } else {
      title1 = title;
    }
    return (
      <div className="col-12 col-md-4">
        <a onClick={this.someFunction}>
          <div className="card shadow h-100">
            <div className="card-body">
              <h4 className="card-text">{title1}</h4>
              <p className="card-text text-secondary mb-0">{excerpt}</p>
              <p className="card-text text-secondary">{company}</p>
            </div>
          </div>
        </a>
        <Modal show={shouldShow} onHide={this.should_notShow}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <div className="text-center">
            <div className="card shadow h-100">
              <div className="card-body">
                <h4 className="card-text">{title}</h4>
                <p className="card-text text-secondary mb-0">{excerpt}</p>
                <p className="card-text text-secondary">{company}</p>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default RecCard;

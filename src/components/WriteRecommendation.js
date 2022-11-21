import React, {Component} from "react";
import { Consumer } from "./context";
import {v4 as uuid} from "uuid";
import axios from "axios";
class WriteRecommendation extends Component{
    state={
        name:"",
        email:"",
        company:"",
        designation:"",
        recommendationMessage:"",
        submitMessage:"",
        submitMessageTextColor:"",
    };
    onChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value,
        });
    };
    onSubmit= async (handler,event)=>{
        event.preventDefault();

        const newRecommendation={
            id: uuid(),
            name: this.state.name,
            company: this.state.company,
            designation: this.state.designation,
            message: this.state.recommendationMessage,
        };

        const response =await axios.post(
            "http://127.0.0.1:9000/api/recommendation",
            newRecommendation
        );
        const isSuccessful=response.data.isSuccessful;           
                      
        const{name}=this.state;
        if(isSuccessful){
            this.setState({
                submitMessage:`Thank you ${name} for the recommendation! I really appreciate it`,
                submitMessageTextColor:"text-info",
            });
        }
        else{
            this.setState({
                submitMessage:"Oops! Something went wrong.Please try again later :(",
                submitMessageTextColor:"text-danger",
            });
        };
       
        handler("ADD_RECOMMENDATION", newRecommendation);
    };
    render(){
        return(
    <Consumer>
        
        {(value)=>{
            const{submitMessage,submitMessageTextColor}=this.state;
            const {handler}= value;
        return(
            <div className="container my-5">
                <h1 className="font-weight-light text-center py-5">
                    <span className="text-info">Thank you!</span> for takin your time.
                </h1>
                <div className="row justify-content-center">
                    <div className="col-11 col-lg-5">
                        <form onSubmit={this.onSubmit.bind(this,handler)}>
                            <div className="form-group">
                                <label htmlFor="name">Name *</label>
                                <input 
                                type="text"
                                name="name"
                                className="form-group"
                                onChange={this.onChange}
                                />
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email *</label>
                                        <input 
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="company">Comoany/Institution *</label>
                                        <input
                                        type="text"
                                        className="form-control"
                                        name="comapany"
                                        onChange={this.onChange}
                                        ></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="designation">Designation *</label>
                                        <input
                                        type="text"
                                        className="form-control"
                                        name="desigantion"
                                        onChange={this.onChange}
                                        ></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="recommendationMessage">Recommendation *</label>
                                        <textarea
                                        className="form-control"
                                        name="recommendationMessage"
                                        rows="5"
                                        onChange={this.onChange}></textarea>
                                    </div>
                                    <button
                                    type="submit"
                                    className="btn btn-danger float-right"
                                    >Lot's of love!</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="py-5 mx-2 text-center">
                {<h5 className={submitMessageTextColor}>{submitMessage}</h5>}
            </div>
            </div>
        );
        }
    }
            </Consumer>
        );
    }
}
        
    

export default WriteRecommendation;
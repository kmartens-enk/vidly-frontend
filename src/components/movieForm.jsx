import { join } from "joi-browser";
import React, {Component} from "react";
import Form from "./common/form";

class MovieForm extends Form {
  state = {
    data: { title: "", genre: "", numberInStock="", rate="" },
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    numberInStock: Joi.number().min(0).max(100).required().label("Number in Stock"),
    rate: Joi.number().min(0).max(20).required().label("Rate");
  };

  doSubmit = () => {
    console.log(this.state.data);
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("genre", "Genre", "list")}
          {this.renderInput("genre", "Genre", "list")}
          {this.renderInput("genre", "Genre", "list")}

          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;

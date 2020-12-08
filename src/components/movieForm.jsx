import React from "react";

const MovieForm = ({ match, history }) => {
  return (
    <React.Fragment>
      <h1>Movie {match.params.id}</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          history.push("/movies");
        }}
      >
        save
      </button>
    </React.Fragment>
  );
};

export default MovieForm;
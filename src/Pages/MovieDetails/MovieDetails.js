import React from "react";
import { movies, Movies } from "../../Constants/MovieList";
const MovieDetails = ({ match, history }) => {
  const findmovie = movies.find((el) => el.id == match.params.id);
  return (
    <div>
      <h1>MovieDetails</h1>

      <h3>{findmovie.description}</h3>
      <button onClick={() => history.goBack()}> Go Back</button>
    </div>
  );
};

export default MovieDetails;

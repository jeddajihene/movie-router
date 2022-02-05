import React from "react";
import MovieCard from "../../Components/Navbar/MovieCard/MovieCard";
import { movies } from "../../Constants/MovieList";
import "./Movies.css";
const Movies = () => {
  return (
    <div className="movielist">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default Movies;

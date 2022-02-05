import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const MovieCard = ({ movie }) => {
  return (
    <div className="jihene">
      <Link to={`/MovieDetails/${movie.id}`}>
        <Card style={{ width: "15rem" }}>
          <Card.Title>{movie.name}</Card.Title>
          <Card.Img variant={movie.image} src={movie.image} width={200} />
          <Button variant="primary">details</Button>
        </Card>
      </Link>
    </div>
  );
};

export default MovieCard;

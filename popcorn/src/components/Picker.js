import React, { useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";
import { Link } from "react-router-dom";

const Picker = () => {
  const { randomMovie, randomFavouriteMovieHandler } = useContext(
    MoviesContext
  );

  return (
    <div>
      <Link to={`/random/${randomMovie.title}`} onClick={randomFavouriteMovieHandler}>
        Pick random movie
      </Link>
    </div>
  );
};

export default Picker;

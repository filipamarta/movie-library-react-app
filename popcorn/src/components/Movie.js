import React, { useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";

const Movie = (props) => {
  //const { addToFavouriteList } = useContext(MoviesContext);
  const { dispatch } = useContext(MoviesContext);

  const { title, id, year, runtime, director, actors } = props;
  return (
    <li id={`movie-${id}`}>
      <h3>{title}</h3>
      <p>
        Year: {year} / Runtime: {runtime}
      </p>
      <p>Director: {director}</p>
      <p>Actors: {actors}</p>
      <button
        name="add"
        type="button"
        onClick={() => {
          dispatch({ type: "ADD_MOVIE", payload: props });
          //addToFavouriteList("ADD_MOVIE", id);
        }}
      >
        Add to favourit list
      </button>
    </li>
  );
};

export default Movie;

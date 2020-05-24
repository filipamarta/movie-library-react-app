import React, { useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";

const FavouriteMovie = (props) => {
  //const { removeFromFavouriteList } = useContext(MoviesContext);
  const { dispatch } = useContext(MoviesContext);
  const { title, id, year, runtime, director, actors } = props;
  
  return (
    <li id={`favourite-movie-${id}`}>
      <p>{title}</p>
      <p>
        Year: {year} / Runtime: {runtime}
      </p>
      <p>Director: {director}</p>
      <p>Actors: {actors}</p>
      <button
        name="remove"
        type="button"
        onClick={() => {
          dispatch({type: "REMOVE_MOVIE", payload: props});
          //removeFromFavouriteList("remove", id);
        }}
      >
        Delete from favourite list
      </button>
    </li>
  );
};

export default FavouriteMovie;

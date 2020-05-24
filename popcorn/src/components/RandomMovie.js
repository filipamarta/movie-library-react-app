import React, { useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";


const RandomMovie = (props) => {
    const { randomMovie } = useContext(MoviesContext);

    console.log(props)
    return (
        <div id={`random-movie-${randomMovie.id}`}>
          <p>{randomMovie.title} </p>
          <p>
            Year: {randomMovie.year} / Runtime: {randomMovie.runtime}
          </p>
          <p>Director: {randomMovie.director}</p>
          <p>Actors: {randomMovie.actors}</p>
        </div>
      );
}
 
export default RandomMovie;
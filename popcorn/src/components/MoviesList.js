import React, { useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";
import Movie from "./Movie";
import FavouriteMovie from "./FavouriteMovie";
import Picker from "./Picker";
import "./MoviesList.scss";

const MoviesList = () => {
  const { genres, movies, favouriteMovies, handleChange, selectedGenre } = useContext(
    MoviesContext
  );

  return (
    <div>
      <div className="favourite-list">
        <h1>Favourite Movies:</h1>

        {favouriteMovies.length > 1 ? <Picker /> : ""}

        <ul>
          {favouriteMovies.map((favouriteMovie, id) => {
            return <FavouriteMovie key={id} {...favouriteMovie} />;
          })}
        </ul>
      </div>
      <div className="movies-list">
        <h1>Movies List:</h1>

        <select onChange={(event) => handleChange(event.target.value)}>
          <option value="All">All</option>
          {genres.map((genre, id) => (
            <option key={id} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        {movies ? (
          <ul>
            {movies.map((movie) => (
              movie.genres.includes(selectedGenre) || selectedGenre === "All" ? 
              <Movie key={movie.id} {...movie} /> :
              null
            ))}
          </ul>
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
};

export default MoviesList;

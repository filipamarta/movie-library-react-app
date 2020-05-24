import React, { createContext, useState, useEffect, useReducer } from "react";
import { favouriteMoviesReducer } from "../reducers/favouriteMoviesReducer";
import axios from "axios";
import { useHistory } from 'react-router-dom';


export const MoviesContext = createContext();

const MoviesContextProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [randomMovie, setRandomMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");
  let history = useHistory();

  //const [favouriteMovies, setFavouriteMovies] = useState([]);
  const [favouriteMovies, dispatch] = useReducer(favouriteMoviesReducer, []);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    const url =
      "https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json";

    axios.get(url).then((response) => {
      //console.log(response.data.genres);
      setMovies(response.data.movies);
      setGenres(response.data.genres);
    });
  };

  const randomizer = (number) => {
    return Math.floor(Math.random() * number + 1) ;
  }

  const randomFavouriteMovieHandler = () => {
    const random = randomizer(favouriteMovies.length);
    const randomMovie = favouriteMovies.find(
      (favourite) => favourite.id === random
    );
    setRandomMovie(randomMovie);
    history.push({ 
      pathname: "/random",
      state: { movie: randomMovie }
    });

  };

  const handleChange = (value) => {
    setSelectedGenre(value);
  };

  /*     const addToFavouriteList = (operator, id) => {
    if (operator === "add") {
      const isMovieInFavourites = [...favouriteMovies].some(
        (element) => element.id == id
      );

      if (!isMovieInFavourites) {
        const filteredMovie = movies.filter((movie) => movie.id === id);
        setFavouriteMovies([...favouriteMovies, { ...filteredMovie[0] }]);
      } else {
        console.log("That movie already exists in the favourite list.");
      }
    } else {
      console.log("You are not adding a movie.");
    }
  }; 
  
  const removeFromFavouriteList = (operator, id) => {
      console.log(operator, id);
      if(operator === "remove") {
        const filteredFavouriteMovie = favouriteMovies.filter((favourite) => favourite.id !== id);
        setFavouriteMovies(filteredFavouriteMovie);
      } else {
        console.log("You are not removing a movie.")
      }
  }  */

  /*  useEffect(() => {
    const { match: { params: { movieId } } } = this.props;
    const filterMovie = randomMovie.find(randomMovie => randomMovie.id);
    setRandomMovie(filterMovie)
  }) */

  return (
    <MoviesContext.Provider
      value={{
        movies,
        favouriteMovies,
        genres,
        randomMovie,
        selectedGenre,
        handleChange,
        randomFavouriteMovieHandler,
        dispatch,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;

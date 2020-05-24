export const favouriteMoviesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      const isMovieInFavourites = [...state].some(
        (element) => element.id === action.payload.id
      );
      return !isMovieInFavourites ? [...state, action.payload] : state;
    case "REMOVE_MOVIE":
        const favouriteListFiltered = state.filter(
          (favourite) => favourite.id !== action.payload.id
        );
        return favouriteListFiltered;
    default:
      return state;
  }
};

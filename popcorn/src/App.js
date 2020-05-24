import React from "react";
import "./App.scss";
import MoviesList from "./components/MoviesList";
import MoviesContextProvider from "./contexts/MoviesContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RandomMovie from "./components/RandomMovie";

function App() {
  return (
    <MoviesContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={MoviesList} />
          <Route path="/random/:movie" component={RandomMovie} />
        </Switch>
      </Router>
    </MoviesContextProvider>
  );
}

export default App;

import React, { useState } from "react";
import axios from "axios";

import Nav from "../Nav/Nav";
import SearchBar from "../SearchBar/SearchBar";
import MovieList from "../MovieList/MovieList";

import "./App.css";

function App() {
  const [state, setState] = useState({
    searchQuery: "",
    movies: [],
    selected: {},
    apiKey: process.env.REACT_APP_API_KEY,
  });

  const apiurl = `https://www.omdbapi.com/?apikey=${state.apiKey}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios(apiurl + "&s=" + state.searchQuery).then(({ data }) => {
      let results = data.Search;
      console.log(data);
      setState((prevState) => {
        return { ...prevState, movies: results };
      });
    });
  };

  const handleInput = (e) => {
    let newSearchQuery = e.target.value;

    setState((prevState) => {
      return { ...prevState, searchQuery: newSearchQuery };
    });

    console.log(state.searchQuery);
  };

  return (
    <div className="App">
      <Nav />
      <SearchBar onChange={handleInput} onSubmit={handleSubmit} />
      <MovieList movies={state.movies} />
    </div>
  );
}

export default App;

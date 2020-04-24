import React, { useState } from "react";
import axios from "axios";

import Nav from "../Nav/Nav";
import SearchBar from "../SearchBar/SearchBar";
import MovieList from "../MovieList/MovieList";
import MovieInfo from "../MovieInfo/MovieInfo";

import "./App.css";

function App() {
  const [state, setState] = useState({
    searchQuery: "",
    movies: [],
    selected: null,
    apiKey: process.env.REACT_APP_API_KEY,
  });
  // console.log(state.selected);

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

  const openPopup = (id) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: null };
    });
  };

  return (
    <div className="App">
      <Nav />
      {state.selected == null ? (
        <div>
          <SearchBar onChange={handleInput} onSubmit={handleSubmit} />
          <MovieList movies={state.movies} openPopup={openPopup} />
        </div>
      ) : (
        <MovieInfo selected={state.selected} closePopup={closePopup} />
      )}
    </div>
  );
}

export default App;

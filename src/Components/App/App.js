import React, { useState } from "react";
import Nav from "../Nav/Nav";
import SearchBar from "../SearchBar/SearchBar";

import "./App.css";

function App() {
  const [state, setState] = useState({
    searchQuery: "",
    results: [],
    selected: {},
    apiKey: process.env.REACT_APP_API_KEY,
  });

  const apiurl = `https://www.omdbapi.com/?apikey=${state.apiKey}`;


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
      <SearchBar onChange={handleInput} />
    </div>
  );
}

export default App;

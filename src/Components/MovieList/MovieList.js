import React from "react";
import Movie from "../Movie/Movie";

const MovieList = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          {props.movies.map((movie, i) => {
            return (
              <Movie
                key={movie.imdbID}
                movie={movie}
                openPopup={props.openPopup}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

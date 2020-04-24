import React from "react";
// import MovieList from "./MovieList";

const Movie = ({ movie, openPopup }) => {
  return (
    <div className="col s12 m6 l3">
      <div className="card">
        <div className="card-image waves-effect waves-block wavess-light">
          {movie.Poster == "N/A" ? (
            <img
              src="http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif"
              alt="card image"
              style={{ width: "100%", height: 360 }}
            />
          ) : (
            <img
              src={movie.Poster}
              alt="card image"
              style={{ width: "100%", height: 360 }}
            />
          )}
          {/* <span class="card-title">
            <b class="grey darken-3">5 {movie.imdbRating}</b>
          </span> */}
        </div>
        <div className="card-content">
          <p> {movie.Title.substring(0, 25)} </p>
          <p>
            <a href="#" onClick={() => openPopup(movie.imdbID)}>
              View details
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Movie;

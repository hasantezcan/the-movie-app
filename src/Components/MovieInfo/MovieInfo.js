import React from "react";

const MovieInfo = ({selected, closePopup}) => {
  return (
    <div className="container">
      <div
        className="row"
        onClick={closePopup}
        style={{ cursor: "pointer", paddingTop: 50 }}
      >
        <span style={{ marginLeft: 10 }}> Go back </span>
      </div>
      <div className="row">
        <div className="col s12 m3">
          {selected.Poster == "N/A" ? (
            <img
              src="http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif"
              alt="card image"
              style={{ width: "100%", height: 360 }}
            />
          ) : (
            <img
              src={selected.Poster}
              alt="card image"
              style={{ width: "100%", height: 360 }}
            />
          )}
        </div>

        <div className="col s12 m9">
          <div className="info-container">
            <h2> {selected.Title} </h2>
            <p> {selected.Plot} </p>

            <p>
              <b>Release year:</b> {selected.Year}
            </p>

            <p>
              <b>Director:</b> {selected.Director}
            </p>

            <p>
              <b>Runtime:</b> {selected.Runtime}
            </p>

            <h4> {selected.imdbRating} </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;

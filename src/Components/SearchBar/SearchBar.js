import React from "react";

const SearchBar = (props) => {
  return (
    <div className="container ">
      <div className="row">
        <section className="col s4 offset-s4">
          <form action="" onSubmit={props.onSubmit}>
            <div className="input-field ">
              <input
                placeholder="Search movie"
                type="text"
                onChange={props.onChange}
              />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default SearchBar;

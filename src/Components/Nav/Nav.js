import React from "react";

import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <nav className="black">
        <div className=" nav-wrapper container">
          <a href="/" className="brand-logo">
            Movie APP
          </a>
        </div>
      </nav>

      <nav className="grey sub-navbar ">
        <div className="container sub-nav">
          You can search any movies in this app!
        </div>
      </nav>
    </div>
  );
};

export default Nav;

import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/countries">Countries</Link>
        {/* <Link to="/countries/show">Map</Link> */}

      </nav>
    );
  }
}

export default NavBar;
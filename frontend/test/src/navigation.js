import React from "react";
import { Link } from "react-router-dom";

const Navig = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/anime-list">Anime list</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navig;

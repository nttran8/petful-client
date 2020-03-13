import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <header>
        <p>Petful</p>
      </header>
      <ol className="navbar">
        <li>
          <Link className="nav" to="/">
            Home
          </Link>
        </li>

        <li>
          <Link className="nav" to="/adoption">
            Adopt
          </Link>
        </li>

        <li>
          <Link className="nav" to="/queue">
            Wait Line
          </Link>
        </li>

        <li>
          <Link className="nav" to="/successstories">
            Success Stories
          </Link>
        </li>
      </ol>
    </div>
  );
}

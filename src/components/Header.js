import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="Header">
      <ol>
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
          <Link className="nav" to="/sucessstories">
            Success Stories
          </Link>
        </li>
      </ol>
    </header>
  );
}

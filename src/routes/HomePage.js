import React from "react";
import welcomeCat from "../img/welcome.jpg";
import "./HomePage.css";

export default function HomePage() {
  function DirectToQueue() {
    console.log("hi");
  }
  return (
    <section className="HomePage">
      <h1>Petful:</h1>
      <p>
        A place to find a your next doggo and catto besfriends! Each adoptor can
        bring one doggo, one catto, or one of each home. To help our doggo and
        catto quickly find a home, we made it a rule to only allow adoptor to
        claim the next available doggo and catto. Click "Adopt Now" to be
        entered in our waiting queue to adopt!
      </p>
      <img src={welcomeCat} alt="welcome cat" />
      <button type="button" onClick={DirectToQueue}>
        Adopt now
      </button>
    </section>
  );
}

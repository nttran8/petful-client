import React from "react";
import welcomeCat from "../img/welcome.jpg";
import ApiService from "../api-service";
import "./index.css";

export default function HomePage(props) {
  function addUser() {
    let name = prompt("What is your name?");
    if (name) {
      ApiService.postUsers({ name });
    }
    setTimeout(() => props.addToQueue(), 3000);
  }

  return (
    <section className="HomePage">
      <h1>Petful:</h1>
      <p>
        A place to find your next doggo and catto besfriends! Each adoptor can
        bring one doggo, one catto, or one of each home. To help our doggo and
        catto quickly find a home, we made it a rule for the adoptor to only
        claim the next available doggo and catto. Click "Adopt Now" to be
        entered in our waiting queue!
      </p>
      <img src={welcomeCat} alt="welcome cat" />
      <button type="button" onClick={addUser}>
        Adopt now
      </button>
    </section>
  );
}

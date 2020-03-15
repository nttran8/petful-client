import React, { Component } from "react";
import UserContext from "../context";

export default class RecentAdoption extends Component {
  static contextType = UserContext;

  render() {
    return (
      <ul>
        {this.context.successStories.map((pet, i) => (
          <li key={i + pet.name} className="pet_story">
            <h3 className="pet-name_story">Name: {pet.name}</h3>
            <img
              className="pet-pic_story"
              src={pet.imageURL}
              alt="adopted pet"
            />
          </li>
        ))}
      </ul>
    );
  }
}

import React, { Component } from "react";
import "./ViewPet.css";

export default class ViewPet extends Component {
  render() {
    let { pet } = this.props;
    return (
      <div className="pet">
        <img className="pet-pic" src={pet.imageURL} alt="picture of said pet" />
        <div className="info">
          <h3 className="pet-name">{pet.name}</h3>
          <div className="breed-age-sex">
            <ul className="breed-age-sex-list">
              <li>{pet.breed}</li>
              <li>{pet.age}</li>
              <li>{pet.gender}</li>
            </ul>
          </div>
          <p>{pet.description}</p>
        </div>
      </div>
    );
  }
}

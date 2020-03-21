import React, { Component } from "react";

const UserContext = React.createContext({
  canAdopt: false,
  successStories: [],
  updateSuccessStories: () => {},
  toggleAdoptionStatus: () => {}
});

export default UserContext;

export class UserProvider extends Component {
  state = {
    canAdopt: false,
    successStories: [
      {
        imageURL:
          "https://boygeniusreport.files.wordpress.com/2016/11/puppy-dog.jpg?quality=98&strip=all",
        name: "Fluffy"
      },
      {
        imageURL:
          "https://images.pexels.com/photos/923360/pexels-photo-923360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Oreo"
      },
      {
        imageURL:
          "https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "P-Tato"
      }
    ]
  };

  updateSuccessStories = animal => {
    const pet = {
      imageURL: animal.imageURL,
      name: animal.name
    };
    this.setState({ successStories: [pet, ...this.state.successStories] });
  };

  toggleAdoptionStatus = () => {
    this.setState({ canAdopt: !this.state.canAdopt });
  };

  render() {
    const value = {
      canAdopt: this.state.canAdopt,
      successStories: this.state.successStories,
      updateSuccessStories: this.updateSuccessStories,
      toggleAdoptionStatus: this.toggleAdoptionStatus
    };

    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

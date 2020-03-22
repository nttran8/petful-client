import React, { Component } from "react";

const UserContext = React.createContext({
  user: null,
  adoptedCat: false,
  adoptedDog: false,
  successStories: [],
  updateUser: () => {},
  updateAdoption: () => {},
  updateSuccessStories: () => {}
});

export default UserContext;

export class UserProvider extends Component {
  state = {
    user: null,
    adoptedCat: false,
    adoptedDog: false,
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

  updateUser = user => {
    this.setState({ user });
  };

  updateAdoption = petType => {
    if (petType === "cat") {
      this.setState({ adoptedCat: true });
    } else {
      this.setState({ adoptedDog: true });
    }
  };

  updateSuccessStories = animal => {
    const pet = {
      imageURL: animal.imageURL,
      name: animal.name
    };
    this.setState({ successStories: [pet, ...this.state.successStories] });
  };

  render() {
    const value = {
      user: this.state.user,
      adoptedCat: this.state.adoptedCat,
      adoptedDog: this.state.adoptedDog,
      successStories: this.state.successStories,
      updateUser: this.updateUser,
      updateAdoption: this.updateAdoption,
      updateSuccessStories: this.updateSuccessStories
    };

    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

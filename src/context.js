import React, { Component } from "react";

const UserContext = React.createContext({
  user: null,
  successStories: [],
  updateSuccessStories: () => {},
  updateUser: () => {}
});

export default UserContext;

export class UserProvider extends Component {
  state = {
    user: null,
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
      successStories: this.state.successStories,
      updateSuccessStories: this.updateSuccessStories,
      updateUser: this.updateUser
    };

    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

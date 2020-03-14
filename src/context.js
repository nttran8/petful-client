import React, { Component } from "react";

const UserContext = React.createContext({
  currentUser: ""
});

export default context;

export class UserProvider extends Component {
  state = {
    currentUser: ""
  };

  updateUser = currentUser => {
    this.setState({ currentUser });
  };

  render() {
    const value = {
      currentUser: this.state.currentUser,
      updateUser: this.updateUser
    };

    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

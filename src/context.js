import React, { Component } from "react";

const UserContext = React.createContext({
  users: [],
  user: "",
  canAdopt: false,
  successStories: [],
  updateUser: () => {},
  removeUser: () => {},
  updateUsers: () => {},
  toggleAdoptionStatus: () => {}
});

export default UserContext;

export class UserProvider extends Component {
  state = {
    users: [],
    user: "",
    successStories: [],
    canAdopt: false
  };

  updateUser = user => {
    this.setState({ user });
  };

  removeUser = () => {
    const newUsers = this.state.users.slice(1);
    this.setState({ users: newUsers });
  };

  updateUsers = users => {
    if (!users.includes(this.state.user)) {
      this.setState({ users: [...users, this.state.user] });
    } else {
      this.setState({ users });
    }
  };

  updateSuccessStories = animal => {
    this.setState({ successStories: [...this.state.successStories, animal] });
  };

  toggleAdoptionStatus = () => {
    this.setState({ canAdopt: !this.state.canAdopt });
  };

  render() {
    const value = {
      users: this.state.users,
      user: this.state.user,
      canAdopt: this.state.canAdopt,
      updateUser: this.updateUser,
      removeUser: this.removeUser,
      updateUsers: this.updateUsers,
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

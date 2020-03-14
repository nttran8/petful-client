import React, { Component } from "react";

const UserContext = React.createContext({
  users: [],
  user: "",
  canAdopt: false,
  updateUser: () => {},
  updateUsers: () => {}
});

export default UserContext;

export class UserProvider extends Component {
  state = {
    users: [],
    user: "",
    canAdopt: false
  };

  updateUser = user => {
    this.setState({ user });
  };

  updateUsers = users => {
    console.log(!users.includes(this.state.user));
    if (!users.includes(this.state.user)) {
      this.setState({ users: [...users, this.state.user] });
    } else {
      this.setState({ users });
    }
  };

  toggleAdoptionStatus = () => {
    this.setState({ canAdopt: !this.state.canAdopt });
  };

  render() {
    const value = {
      users: this.state.users,
      user: this.state.user,
      updateUser: this.updateUser,
      updateUsers: this.updateUsers,
      toggleAdoptionStatus: this.toggleAdoptionStatus
    };

    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

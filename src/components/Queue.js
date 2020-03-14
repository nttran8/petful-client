import React, { Component } from "react";
import ApiService from "../api-service";
import UserContext from "../context";

export default class Queue extends Component {
  static contextType = UserContext;
  state = { users: [] };

  componentDidMount() {
    ApiService.getUsers()
      .then(users => {
        if (this.context.currentUser.length > 0 && users.length > 0) {
          this.setState({ users: [...users, this.context.currentUser] });
        } else if (this.context.currentUser.length > 0) {
          this.setState({ user: [this.context.currentUser] });
        } else {
          this.setState({ users });
        }
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <ul>
        {this.state.users.map((user, i) => (
          <li key={i + user}>{user}</li>
        ))}
      </ul>
    );
  }
}

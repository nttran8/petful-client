import React, { Component } from "react";
import ApiService from "../api-service";
import UserContext from "../context";

export default class Queue extends Component {
  static contextType = UserContext;

  componentDidMount() {
    ApiService.getUsers()
      .then(users => {
        this.context.updateUsers(users);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <ul>
        {this.context.users.map((user, i) => (
          <li key={i + user}>{user}</li>
        ))}
      </ul>
    );
  }
}

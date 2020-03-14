import React, { Component } from "react";
import ApiService from "../api-service";

export default class Queue extends Component {
  state = { users: [] };

  componentDidMount() {
    ApiService.getUsers()
      .then(users => {
        console.log(users)
        this.setState({ users: users.people });
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

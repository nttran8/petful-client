import React, { Component } from "react";
import ApiService from "../api-service";
import UserContext from "../context";
import DequeueTimer from "../dequeueTimer";

export default class Queue extends Component {
  state = {
    message: "Adopting Queue:"
  };

  static contextType = UserContext;

  componentDidMount() {
    // Fetch users if there are no users in the list
    if (this.context.users.length === 0) {
      ApiService.getUsers()
        .then(users => {
          this.context.updateUsers(users);
        })
        .catch(error => console.log(error));
    } else {
      DequeueTimer.setTimer();
    }

    // If user is next in line, update adoption status and message
    if (this.context.user === this.context.users[0] && !this.context.canAdopt) {
      this.context.toggleAdoptionStatus();
      this.setState({
        message: `Congragulations, please navigate to the "Adopt" tab to start your adoption process.`
      });
    }
  }

  componentWillUnmount() {
    DequeueTimer.stopTimer();
  }

  render() {
    return (
      <>
        <h2>{this.state.message}</h2>
        <ul>
          {this.context.users.map((user, i) => (
            <li key={i + user}>{user}</li>
          ))}
        </ul>
      </>
    );
  }
}

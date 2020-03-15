import React, { Component } from "react";
import ApiService from "../api-service";
import UserContext from "../context";

let _10_SEC = 10000;
let _timeoutId = null;

export default class Queue extends Component {
  state = {
    message: "Adopting Queue:"
  };

  static contextType = UserContext;

  stopTimer = () => {
    clearTimeout(_timeoutId);
  };

  setTimer = ev => {
    // Set timer to 10 sec
    _timeoutId = setTimeout(this.dequeue, _10_SEC);
  };

  dequeue = () => {
    // Remove user
    ApiService.deleteUsers(this.context.users[0]).then(res =>
      this.context.removeUser()
    );
    // Randomly remove an animal
    const animal = ["cat", "dog"];
    const type = animal[Math.floor(Math.random() * animal.length)];
    // Remove pet
    ApiService.deletePets(type).then(pet =>
      this.context.updateSuccessStories(pet)
    );
    // Dequeue user every X Sec
    if (this.context.users.length > 1) {
      _timeoutId = setTimeout(this.dequeue, _10_SEC);
    }
  };

  componentDidMount() {
    // Fetch users if there are no users in the list
    if (this.context.users.length === 0) {
      ApiService.getUsers()
        .then(users => {
          this.context.updateUsers(users);
        })
        .catch(error => console.log(error));
    } else {
      this.setTimer();
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
    this.stopTimer();
  }

  render() {
    return (
      <>
        <h2>{this.state.message}</h2>
        <ul className="queue-list">
          {this.context.users.map((user, i) => (
            <li key={i + user}>{user}</li>
          ))}
        </ul>
      </>
    );
  }
}

import React, { Component } from "react";
import ApiService from "../api-service";
import UserContext from "../context";

let _5_SEC = 5000;
let _timeoutId = null;

export default class Queue extends Component {
  static contextType = UserContext;

  state = {
    message: "Adopting Queue:",
    users: null,
    canAdopt: false
  };

  setTimer = ev => {
    // Set timer to 5 sec
    _timeoutId = setTimeout(this.dequeueEnqueue, _5_SEC);
  };

  stopTimer = () => {
    clearTimeout(_timeoutId);
  };

  dequeueEnqueue = () => {
    // Randomly grab an animal to dequeue
    const animal = ["cat", "dog"];
    const type = animal[Math.floor(Math.random() * animal.length)];

    // Randomly grab a person to enqueue
    const firstNames = [
      "Jessica",
      "Thomas",
      "Taylor",
      "Nghi",
      "Alan",
      "Sarah",
      "Junior",
      "Mark",
      "Eks",
      "Jackie"
    ];

    const lastNames = [
      "Chirashi",
      "Onigiri",
      "Piccarreto",
      "Tran",
      "Unagi",
      "Maki",
      "Takowasa",
      "Toro",
      "Tamago",
      "Sake"
    ];

    const name =
      firstNames[Math.floor(Math.random() * firstNames.length)] +
      " " +
      lastNames[Math.floor(Math.random() * lastNames.length)];

    // Dequeue and enqueue user
    ApiService.deleteUsers(this.context.users[0]).then(res => {
      this.setState({ users: [...this.state.users.slice(1), name] });
      this.checkAdoptionStatus();
    });
    ApiService.postUsers(name);

    // Dequeue pet
    ApiService.deletePets(type)
      .then(pet => {
        this.context.updateSuccessStories(pet);
      })
      .then(() => {
        // Dequeue and enqueue sample user every 5 sec
        _timeoutId = setTimeout(this.dequeueEnqueue, _5_SEC);
      });
  };

  checkAdoptionStatus = () => {
    if (!window.localStorage.getItem("canAdopt") && this.context.user) {
      if (!this.users.includes(this.context.user)) {
        this.updateAdoptionStatus();
      }
    }
  };

  updateAdoptionStatus = () => {
    this.setState({
      canAdopt: true,
      message: `Congratulations! Please navigate to the 'Adopt' page to start the adoption process!`
    });
  };

  componentDidMount() {
    // Fetch users
    ApiService.getUsers()
      .then(users => {
        this.setState({ users });
      })
      .then(() => {
        if (window.localStorage.getItem("canAdopt") === true) {
          this.updateAdoptionStatus();
        } else {
          window.localStorage.setItem("canAdopt", false);
          this.setState({ message: `You're almost next to adopt!` });
        }
        // Automatically dequeue and enqueue users and pets
        this.setTimer();
      })
      .catch(error => console.log(error));
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  render() {
    return (
      <>
        <h2>{this.state.message}</h2>
        <ul className="queue-list">
          {this.state.users &&
            this.state.users.map((user, i) => <li key={i + user}>{user}</li>)}
        </ul>
      </>
    );
  }
}
